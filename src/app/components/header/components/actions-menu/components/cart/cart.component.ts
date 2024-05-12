import { Component, HostListener, OnInit } from '@angular/core';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { SvgCartComponent } from 'src/app/shared/svg/svg-cart/svg-cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MyCurrencyPipe } from 'src/app/shared/pipes/my-currency.pipe';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SvgRightComponent } from 'src/app/shared/svg/svg-right/svg-right.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { CartContentComponent } from './cart-content/cart-content.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
  standalone: true,
  imports: [NzPopoverModule, SvgCartComponent, CartItemComponent, NgFor, AsyncPipe, MyCurrencyPipe, NzButtonModule, SvgRightComponent, NzDrawerModule, CartContentComponent, NgIf]
})
export class CartComponent implements OnInit {
  /**
   */
  visibleCartPopover = false

  /**
   */
  visibleCartDrawer = false

  /**
   */
  isMobileSize = false

  constructor() { }

  ngOnInit() {
    this.checkMobileSize()
  }

  /**
   * 
   * @param state 
   * @returns 
   */
  toggleCartPopup(state: boolean) {
    if (this.isMobileSize) {
      this.visibleCartDrawer = state
      return
    }
    this.visibleCartPopover = state
  }

  /**
   * 
   */
  closeCartDrawer() {
    this.visibleCartDrawer = false
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
