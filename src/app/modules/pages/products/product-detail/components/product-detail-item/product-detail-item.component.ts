import { Component, OnInit } from '@angular/core';
import { CalcComponent } from 'src/app/shared/components/calc/calc.component';

@Component({
  selector: 'app-product-detail-item',
  templateUrl: './product-detail-item.component.html',
  styleUrls: ['./product-detail-item.component.css'],
  standalone: true,
  imports: [CalcComponent]
})
export class ProductDetailItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
