import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ListOfProductComponent } from 'src/app/shared/components/list-of-product/list-of-product.component';

export interface IndividualProductsData {
  title: string;
  description: string;
  listTitle?: string;
  list: string[];
  img: string;
  link: string;
  fade?: boolean;
  category_id?: number;
}

@Component({
  selector: 'app-individuals',
  templateUrl: './individuals.component.html',
  styleUrls: ['./individuals.component.css'],
  standalone: true,
  imports: [
    TranslateModule,
    NgFor,
    NgIf,
    NgClass,
    NzButtonModule,
    RouterLink,
    ListOfProductComponent,
  ],
})
export class IndividualsComponent {
  advantages = [
    'advantages1',
    'advantages2',
    'advantages3',
    'advantages4',
    'advantages5',
    'advantages6',
  ];

  products: IndividualProductsData[] = [
    {
      title: 'aspiriTitle',
      description: 'aspireDesc',
      listTitle: 'aspiriTitle',
      list: [
        'aspireList1',
        'aspireList2',
        'aspireList3',
        'aspireList4',
        'aspireList5',
        'aspireList6',
        'aspireList7',
        'aspireList8',
      ],
      img: './assets/image/individula-1.png',
      link: '../products/list?page=1&category_id=6',
      category_id: 9,
    },
    {
      title: 'advanceTitle',
      description: 'advanceDesc',
      listTitle: 'advanceTitle',
      list: [
        'advanceList1',
        'advanceList2',
        'advanceList3',
        'advanceList4',
        'advanceList5',
        'advanceList6',
        'advanceList7',
        'advanceList8',
        'advanceList9',
        'advanceList10',
      ],
      img: './assets/image/individula-2.png',
      link: '../products/list?page=1&category_id=2',
      category_id: 2,
    },
    {
      title: 'adeptTitle',
      description: 'adeptDesc',
      listTitle: 'adeptTitle',
      list: [
        'adeptList1',
        'adeptList2',
        'adeptList3',
        'adeptList4',
        'adeptList5',
        'adeptList6',
        'adeptList7',
        'adeptList8',
      ],
      img: './assets/image/individula-3.png',
      link: '../products/list?page=1&category_id=7',
      category_id: 7,
    },
  ];
}
