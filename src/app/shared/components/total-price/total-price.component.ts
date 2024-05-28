import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MyCurrencyPipe } from '../../pipes/my-currency.pipe';
import { Price } from '../../models/price.model';

@Component({
  selector: 'app-total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.css'],
  standalone: true,
  imports: [TranslateModule, AsyncPipe, MyCurrencyPipe],
})
export class TotalPriceComponent {
  private _totalPrice!: Price;
  public get totalPrice(): Price {
    return this._totalPrice;
  }
  @Input()
  public set totalPrice(v: Price) {
    this._totalPrice = v;
  }
}
