import { Component, OnInit } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { SvgRightComponent } from 'src/app/shared/svg/svg-right/svg-right.component';
import { NgFor } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css'],
  standalone: true,
  imports: [CartItemComponent, SvgRightComponent, NgFor, NzButtonModule]
})
export class CartContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
