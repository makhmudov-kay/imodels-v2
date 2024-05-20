import { AsyncPipe, DecimalPipe, NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzImageModule } from 'ng-zorro-antd/image';
import { Product } from '../catalogue/models/product.model';
import { MyCurrencyPipe } from 'src/app/shared/pipes/my-currency.pipe';
import { MyTranslatePipe } from 'src/app/shared/pipes/my-translate.pipe';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less'],
  standalone: true,
  imports: [
    NzImageModule,
    MyCurrencyPipe,
    AsyncPipe,
    MyTranslatePipe,
    NgIf,
    NgClass,
    DecimalPipe,
  ],
})
export class ProductCardComponent {
  /**
   *
   */
  @Input()
  isSkeleton = false;

  /**
   *
   */
  @Input()
  product!: Product;

  /**
   *
   */
  fallback = './assets/image/not-found.png';
}
