import { Component } from '@angular/core';
import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  standalone: true,
  imports: [NzImageModule],
})
export class ProductCardComponent {
  fallback = './assets/image/not-found.png';
}
