import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { ProductItem } from '../../../products/product-detail/models/product-detail.model';
import { CalcComponent } from 'src/app/shared/components/calc/calc.component';
import { TranslateModule } from '@ngx-translate/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MyCurrencyPipe } from 'src/app/shared/pipes/my-currency.pipe';
import { MyTranslatePipe } from 'src/app/shared/pipes/my-translate.pipe';
import { RouterLink } from '@angular/router';
import { SvgTrashComponent } from 'src/app/shared/svg/svg-trash/svg-trash.component';
import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  standalone: true,
  imports: [
    CalcComponent,
    TranslateModule,
    NgIf,
    NgFor,
    MyCurrencyPipe,
    AsyncPipe,
    MyTranslatePipe,
    RouterLink,
    SvgTrashComponent,
    NzImageModule,
  ],
})
export class CartListComponent {
  /**
   *
   */
  @Input()
  cartItems!: ProductItem[];
  /**
   *
   */
  @Output()
  decreaseProduct = new EventEmitter<number>();
  /**
   *
   */
  @Output()
  increaseProduct = new EventEmitter<number>();
  /**
   *
   */
  @Output()
  deleteProductHandler = new EventEmitter<number>();
  /**
   *
   */
  isMobileSize = false;
  fallback = './assets/image/not-found.png';

  /**
   *
   * @param cd
   */
  constructor(private cd: ChangeDetectorRef) {
    this.checkMobileSize();
  }

  /**
   *
   */
  private checkMobileSize() {
    this.isMobileSize = window.innerWidth < 991;
    console.log(this.isMobileSize);
    
    this.cd.markForCheck();
  }

  /**
   *
   */
  decrease(id: number) {
    this.decreaseProduct.emit(id);
  }

  /**
   *
   */
  increase(id: number) {
    this.increaseProduct.emit(id);
  }

  /**
   *
   * @param id
   */
  deleteProduct(id: number) {
    this.deleteProductHandler.emit(id);
  }

  /**
   *
   */
  @HostListener('window:resize')
  onResize(e: any) {
    this.checkMobileSize();
  }
}
