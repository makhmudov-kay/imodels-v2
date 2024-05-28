import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { SvgRightComponent } from 'src/app/shared/svg/svg-right/svg-right.component';
import { NgFor } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Price } from 'src/app/shared/models/price.model';

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
  ],
})
export class CartContentComponent {
  @Input()
  totalPrice!: Price;

  @Input()
  cartItems!: any[];

  @Output()
  close = new EventEmitter();

  @Output()
  deleteProduct = new EventEmitter<number>();
}
