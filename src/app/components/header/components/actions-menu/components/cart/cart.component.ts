import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  inject,
} from '@angular/core';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { SvgCartComponent } from 'src/app/shared/svg/svg-cart/svg-cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MyCurrencyPipe } from 'src/app/shared/pipes/my-currency.pipe';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SvgRightComponent } from 'src/app/shared/svg/svg-right/svg-right.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { CartContentComponent } from './cart-content/cart-content.component';
import { Price } from 'src/app/shared/models/price.model';
import { Select, Store } from '@ngxs/store';
import { DataState } from 'src/app/shared/store/data/data.state';
import { Observable } from 'rxjs';
import { CartAction } from 'src/app/shared/store/data/data.action';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
  standalone: true,
  imports: [
    NzPopoverModule,
    SvgCartComponent,
    CartItemComponent,
    NgFor,
    AsyncPipe,
    MyCurrencyPipe,
    NzButtonModule,
    SvgRightComponent,
    NzDrawerModule,
    CartContentComponent,
    NgIf,
    NzBadgeModule,
  ],
})
export class CartComponent implements OnInit {
  /**
   */
  visibleCartPopover = false;
  visibleCartDrawer = false;
  isMobileSize = false;
  cartItems!: any[];
  totalCount!: number;
  totalPrice!: Price;

  /**
   *
   */
  @Select(DataState.cart)
  cart$!: Observable<any[]>;

  /**
   */
  private $store = inject(Store);
  private $cd = inject(ChangeDetectorRef);

  /**
   *
   * @param id
   */
  deleteProduct(id: number) {
    const newCartList = this.cartItems.filter((item) => item.id !== id);
    this.$store.dispatch(new CartAction(newCartList));
  }

  ngOnInit() {
    this.checkMobileSize();

    this.cart$.subscribe((data) => {
      this.cartItems = data;
      this.totalCount = this.cartItems.reduce(
        (acc, item) => acc + item.count,
        0
      );

      const totalPrices = data.reduce(
        (total: Price, item: any) => {
          total.usd += item.totalPrice.usd;
          total.uzs += item.totalPrice.uzs;
          total.eur += item.totalPrice.eur;
          return total;
        },
        { usd: 0, uzs: 0, eur: 0 }
      );
      this.totalPrice = totalPrices;
      this.$cd.markForCheck();
    });
  }

  /**
   *
   * @param state
   * @returns
   */
  toggleCartPopup(state: boolean) {
    if (this.isMobileSize) {
      this.visibleCartDrawer = state;
      return;
    }
    this.visibleCartPopover = state;
  }

  /**
   *
   */
  closeCartDrawer() {
    this.visibleCartDrawer = false;
    this.visibleCartPopover = false;
  }
  /**
   *
   */
  private checkMobileSize() {
    this.isMobileSize = window.innerWidth < 767;
  }

  /**
   *
   * @param e
   */
  @HostListener('window:resize')
  onResize(e: any) {
    this.checkMobileSize();
  }
}
