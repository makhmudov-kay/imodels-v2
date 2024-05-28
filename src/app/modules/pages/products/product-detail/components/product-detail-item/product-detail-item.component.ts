import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CalcComponent } from 'src/app/shared/components/calc/calc.component';
import { ProductItem } from '../../models/product-detail.model';
import { ClearCountService } from '../../service/clear-count.service';
import { Price } from 'src/app/shared/models/price.model';
import { MyTranslatePipe } from 'src/app/shared/pipes/my-translate.pipe';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { MyCurrencyPipe } from 'src/app/shared/pipes/my-currency.pipe';

@Component({
  selector: 'app-product-detail-item',
  templateUrl: './product-detail-item.component.html',
  styleUrls: ['./product-detail-item.component.css'],
  standalone: true,
  imports: [CalcComponent, MyTranslatePipe, AsyncPipe, MyCurrencyPipe, NgIf, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailItemComponent implements OnInit {
  /**
   *
   */
  private _product!: ProductItem;
  public get product(): ProductItem {
    return this._product;
  }
  @Input()
  public set product(v: ProductItem) {
    this._product = v;
    this._product.count = 1;
    this._product.totalPrice =
      this.product.discount > 0
        ? { ...this.product.new_price }
        : { ...this.product.price };
  }

  /**
   */
  @Input()
  configuratorId!: null | number;

  @Input()
  mainItem!: boolean;

  @Input()
  single!: boolean;

  @Input()
  onlyCounter!: boolean;

  @Input()
  isConfigurator = false;

  @Output()
  increaseCount = new EventEmitter();

  @Output()
  openModuleSlider = new EventEmitter<number>();

  @Output()
  decreaseCount = new EventEmitter();

  @Output()
  addOrDeleteProduct = new EventEmitter<any>();

  /**
   */
  private $cd = inject(ChangeDetectorRef);
  private $clearCount = inject(ClearCountService);

  /**
   *
   */
  count = 0;

  /**
   * 
   */
  private clearCountListener() {
    this.$clearCount.clearCount$.subscribe((w) => {
      if (w) {
        this.count = 0;
        if ((this.mainItem || this.single) && this.count === 0) {
          this.increase();
        }
        this.$cd.markForCheck();
      }
    });
  }

  /**
   *
   */
  ngOnInit() {
    this.clearCountListener();
    if ((this.mainItem || this.single) && this.count === 0) {
      this.increase();
    }
  }

  /**
   *
   * @param encrese
   */
  private handleCounter(encrese: boolean = false) {
    if (encrese) {
      ++this.count;
    } else {
      --this.count;
    }
    this.product.count = this.count;
    this.product.configurator_id = this.configuratorId;
    this.product.is_configurator = this.isConfigurator;

    for (const key in this.product.totalPrice) {
      if (Object.prototype.hasOwnProperty.call(this.product.totalPrice, key)) {
        if (this.product.discount > 0) {
          this.product.totalPrice[key as keyof Price] =
            this.product.new_price[key as keyof Price] * this.product.count;
        } else {
          this.product.totalPrice[key as keyof Price] =
            this.product.price[key as keyof Price] * this.product.count;
        }
      }
    }
    console.log(this.product.count);
    console.log(this.product);

    this.addOrDeleteProduct.emit(this.product);
    this.$cd.markForCheck();
  }

  /**
   *
   */
  increase() {
    this.handleCounter(true);
  }

  /**
   *
   */
  decrease() {
    if (this.count > 0) {
      this.handleCounter();
    }
  }
}
