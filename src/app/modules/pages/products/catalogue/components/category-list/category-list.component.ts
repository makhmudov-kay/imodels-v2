import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';
import { CategoryItemComponent } from '../category-item/category-item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.less'],
  standalone: true,
  imports: [
    TranslateModule,
    NzRadioModule,
    FormsModule,
    CategoryItemComponent,
    NgFor,
  ],
})
export class CategoryListComponent implements OnInit {
  radioValue = 'A';
  constructor() {}

  ngOnInit() {}
}
