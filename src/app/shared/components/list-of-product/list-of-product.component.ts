import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-list-of-product',
  templateUrl: './list-of-product.component.html',
  styleUrls: ['./list-of-product.component.css'],
  standalone: true,
  imports: [TranslateModule, NgFor, NgClass, NgIf, RouterLink, NzButtonModule]
})
export class ListOfProductComponent  {
  @Input() products!: any[];
}
