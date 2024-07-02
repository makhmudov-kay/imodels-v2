import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CartTotalComponent } from './components/cart-total/cart-total.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { ProductItem } from '../products/product-detail/models/product-detail.model';
import { Price } from 'src/app/shared/models/price.model';
import { Select, Store } from '@ngxs/store';
import { Observable, takeUntil } from 'rxjs';
import { DataState } from 'src/app/shared/store/data/data.state';
import { OrderService } from './services/order.service';
import { CartAction } from 'src/app/shared/store/data/data.action';
import { OrderRequest } from './models/order.request';
import { NgDestroy } from 'src/app/core/services/ng-destroy.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [CartTotalComponent, CartListComponent, TranslateModule],
  providers: [NgDestroy],
})
export class CartComponent implements OnInit {
  /**
   *
   */
  cartItems!: ProductItem[];
  totalPrice!: Price;
  isLoading = false;
  sendOrderText = false;

  /**
   *
   */
  @Select(DataState.cart)
  cart$!: Observable<ProductItem[]>;

  /**
   *
   */
  private $store = inject(Store);
  private $order = inject(OrderService);
  private $cd = inject(ChangeDetectorRef);
  private $destroy = inject(NgDestroy);
  private $notification = inject(NzNotificationService);
  private $translate = inject(TranslateService);
  private auth$ = inject(AuthService);
  private router = inject(Router);

  /**
   *
   */
  ngOnInit(): void {
    this.cart$.subscribe((data) => {
      this.cartItems = data;
      this.calcTotalsPrice();
      this.$cd.markForCheck();
    });
  }

  /**
   *
   */
  private calcTotalsPrice() {
    this.cartItems.forEach((item) => {
      this.calcTotalPrice(item);
    });
    this.totalPrice = this.cartItems.reduce(
      (total: Price, item: any) => {
        total.usd += item.totalPrice.usd;
        total.uzs += item.totalPrice.uzs;
        total.eur += item.totalPrice.eur;
        return total;
      },
      { usd: 0, uzs: 0, eur: 0 }
    );
    this.$cd.markForCheck();
  }

  /**
   *
   * @param newCartList
   */
  private updateCart(newCartList: any[]) {
    this.calcTotalsPrice();
    this.$store.dispatch(new CartAction(newCartList));
  }

  /**
   *
   * @param newCartList
   */
  private calcTotalPrice(newCartList: any) {
    for (const key in newCartList.totalPrice) {
      if (Object.prototype.hasOwnProperty.call(newCartList.totalPrice, key)) {
        if (newCartList.discount > 0) {
          newCartList.totalPrice[key as keyof Price] =
            newCartList.new_price[key as keyof Price] * newCartList.count;
        } else {
          newCartList.totalPrice[key as keyof Price] =
            newCartList.price[key as keyof Price] * newCartList.count;
        }
      }
    }
  }

  /**
   *
   * @param id
   */
  deleteProduct(id: number) {
    const newCartList = this.cartItems.filter((item) => item.id !== id);
    this.updateCart(newCartList);
  }

  /**
   *
   * @param id
   */
  decreaseProduct(id: number) {
    const newCartList = this.cartItems.find((item) => item.id === id);
    if (newCartList && newCartList.count) {
      --newCartList.count;
      this.calcTotalPrice(newCartList);
    }
    const filteredList = this.cartItems.filter((item: any) => item.count !== 0);
    this.updateCart(filteredList);
  }

  /**
   *
   * @param id
   */
  increaseProduct(id: number) {
    const newCartList = this.cartItems.find((item) => item.id === id);
    if (newCartList && newCartList.count) {
      ++newCartList.count;
      this.calcTotalPrice(newCartList);
    }
    this.updateCart(this.cartItems);
  }

  /**
   *
   * @param type
   */
  createNotification(): void {
    this.$notification.success(
      this.$translate.instant('congratulations'),
      this.$translate.instant('wasCreated')
    );
  }

  /**
   *
   */
  sendOrder() {
    if (!this.auth$.isAuthintificate()) {
      this.router.navigate(['../cabinet']);
      return;
    }

    this.isLoading = true;
    this.$cd.markForCheck();
    const products: OrderRequest[] = [];
    this.cartItems.forEach((item) => {
      const newItem = {
        configurator: item.configurator_id ? item.configurator_id : null,
        product: item.id,
        quantity: item.count,
        price: item.discount > 0 ? item.new_price : item.price,
      };

      products.push(newItem);
    });

    this.$order
      .sendOrder(products)
      .pipe(takeUntil(this.$destroy))
      .subscribe((result: any) => {
        if (result.detail.includes('Order created')) {
          this.sendOrderText = true;
          this.isLoading = false;
          this.cartItems = [];
          this.createNotification();
          this.$store.dispatch(new CartAction([]));
          localStorage.removeItem('cart');
          this.router.navigate(['../cabinet']);
          this.$cd.markForCheck();
        }
      });
  }
}
