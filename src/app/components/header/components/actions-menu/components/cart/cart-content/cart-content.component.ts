import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { SvgRightComponent } from 'src/app/shared/svg/svg-right/svg-right.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Price } from 'src/app/shared/models/price.model';
import { TranslateModule } from '@ngx-translate/core';
import { MyCurrencyPipe } from 'src/app/shared/pipes/my-currency.pipe';
import { RouterLink } from '@angular/router';
import { SvgCartComponent } from 'src/app/shared/svg/svg-cart/svg-cart.component';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.less'],
  standalone: true,
  imports: [
    CartItemComponent,
    SvgRightComponent,
    NgFor,
    NzButtonModule,
    NzIconModule,
    TranslateModule,
    MyCurrencyPipe,
    AsyncPipe,
    RouterLink,
    NgIf,
    SvgCartComponent,
  ],
})
export class CartContentComponent {
  @Input()
  totalPrice!: Price;

  @Input()
  visibleCartPopover!: boolean;

  @Input()
  visibleCartDrawer!: boolean;

  @Input()
  cartItems!: any[];

  @Output()
  close = new EventEmitter();

  @Output()
  deleteProduct = new EventEmitter<number>();
}
