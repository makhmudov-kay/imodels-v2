import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Price } from 'src/app/shared/models/price.model';
import { MyCurrencyPipe } from 'src/app/shared/pipes/my-currency.pipe';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css'],
  standalone: true,
  imports: [TranslateModule, MyCurrencyPipe, AsyncPipe, NzButtonModule],
})
export class CartTotalComponent {
  /**
   */
  private _totalPrice!: Price;
  public get totalPrice(): Price {
    return this._totalPrice;
  }
  @Input()
  public set totalPrice(v: Price) {
    this._totalPrice = v;
  }
  /**
   *
   */
  @Input()
  isLoading!: boolean;
  /**
   *
   */
  @Output()
  sendOrder = new EventEmitter();
}
