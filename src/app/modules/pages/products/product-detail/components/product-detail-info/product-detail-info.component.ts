import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { SvgCartComponent } from 'src/app/shared/svg/svg-cart/svg-cart.component';
import { ProductDetailItemComponent } from '../product-detail-item/product-detail-item.component';
import { ProductDetail, ProductItem } from '../../models/product-detail.model';
import { Price } from 'src/app/shared/models/price.model';
import { Store } from '@ngxs/store';
import { ClearCountService } from '../../service/clear-count.service';
import { DataState } from 'src/app/shared/store/data/data.state';
import { CartAction } from 'src/app/shared/store/data/data.action';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-detail-info',
  templateUrl: './product-detail-info.component.html',
  styleUrls: ['./product-detail-info.component.css'],
  standalone: true,
  imports: [NzInputNumberModule, FormsModule, NzDividerModule, NzButtonModule, SvgCartComponent, ProductDetailItemComponent, TranslateModule, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailInfoComponent implements OnInit {
  /**
  */
  private _product!: ProductDetail;
  public get product(): ProductDetail {
    return this._product;
  }
  @Input()
  public set product(v: ProductDetail) {
    this._product = v;
    this.singleProduct = {
      id: v.id,
      title: v.title,
      price: v.price,
      new_price: v.new_price,
      discount: v.discount,
      configurator_id: null,
      image: v.product_images[0].image,
      count: 0,
      is_configurator: false,
      totalPrice: {
        usd: v.price.usd,
        uzs: v.price.uzs,
        eur: v.price.eur,
      },
    };
  }

  /**
  *
  */
  @Output()
  isAddedToCart = new EventEmitter<boolean>();

  /**
   *
   */
  @Output()
  openModuleSlider = new EventEmitter<number>();

  /**
   */
  singleProduct!: ProductItem;
  totalPrice!: Price;
  list: any = [];
  isConfiguratorAdded = false;
  needToAddcart: any = [];
  configurator = false;

  /**
   */
  private $store = inject(Store)
  private $cd = inject(ChangeDetectorRef)
  private $clearCount = inject(ClearCountService)


  demoValue = 100;

  ngOnInit() {
  }

  /**
   * 
   * @param product 
   */
  addOrDeleteProduct(product: any) {
    this.list.push(product);
    const result = Object.values(
      this.list.reduce(
        (acc: any, n: any) => (!acc[n.id] && (acc[n.id] = n), acc),
        {}
      )
    );
    const totalPrices = result.reduce(
      (total: Price, item: any) => {
        total.usd += item.totalPrice.usd;
        total.uzs += item.totalPrice.uzs;
        total.eur += item.totalPrice.eur;
        return total;
      },
      { usd: 0, uzs: 0, eur: 0 }
    );
    const filteredList = result.filter((item: any) => item.count !== 0);
    this.totalPrice = totalPrices;
    this.needToAddcart = filteredList;
    this.isConfiguratorAdded = !!this.needToAddcart.find(
      (i: any) => i.is_configurator
    );
    this.$cd.markForCheck();
  }

  /**
   * 
   */
  addToCart() {
    if (this.needToAddcart.length) {
      const cart = this.$store.selectSnapshot(DataState.cart);
      this.needToAddcart.forEach((item: any) => {
        const sameItem = cart.find((cartItem: any) => item.id === cartItem.id);

        if (sameItem) {
          sameItem.count += item.count;
          if (sameItem.discount > 0) {
            sameItem.totalPrice = {
              usd: item.totalPrice.usd
                ? sameItem.totalPrice.usd + item.new_price.usd * item.count
                : item.new_price.usd * item.count,
              uzs: item.totalPrice.uzs
                ? sameItem.totalPrice.uzs + item.new_price.uzs * item.count
                : item.new_price.uzs * item.count,
              eur: item.totalPrice.eur
                ? sameItem.totalPrice.eur + item.new_price.eur * item.count
                : item.new_price.eur * item.count,
            };
          } else {
            sameItem.totalPrice = {
              usd: item.totalPrice.usd
                ? sameItem.totalPrice.usd + item.price.usd * item.count
                : item.price.usd * item.count,
              uzs: item.totalPrice.uzs
                ? sameItem.totalPrice.uzs + item.price.uzs * item.count
                : item.price.uzs * item.count,
              eur: item.totalPrice.eur
                ? sameItem.totalPrice.eur + item.price.eur * item.count
                : item.price.eur * item.count,
            };
          }
        } else {
          cart.push({ ...item });
        }
      });
      this.$store.dispatch(new CartAction(cart));
    }

    for (const key in this.totalPrice) {
      if (Object.prototype.hasOwnProperty.call(this.totalPrice, key)) {
        this.totalPrice[key as keyof Price] = 0;
        this.$cd.markForCheck();
      }
    }

    this.$clearCount.clearCount$.next(true);
    this.isAddedToCart.emit(true);
    this.$cd.markForCheck();
  }

  /**
   * 
   * @param type 
   */
  toggleCollapse(type: string) {
    this.product.items = this.product.items.map((item: any) => {
      if (item.type === type) {
        item.isOpened = !item.isOpened;
      } else {
        item.isOpened = false;
      }
      return item;
    });
  }

  /**
   * 
   */
  toggleConfigurator() {
    this.configurator = !this.configurator;
  }
}
