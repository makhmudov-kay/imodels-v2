import { Component, EventEmitter, Output } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { SvgRightComponent } from 'src/app/shared/svg/svg-right/svg-right.component';
import { NgFor } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

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
  @Output()
  close = new EventEmitter();
}
