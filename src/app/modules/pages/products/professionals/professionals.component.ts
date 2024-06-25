import { TranslateModule } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { SectionMainTitleComponent } from 'src/app/shared/components/section-title/section-title/section-title.component';
import { IndividualProductsData } from '../individuals/individuals.component';
import { ListOfProductComponent } from 'src/app/shared/components/list-of-product/list-of-product.component';

export interface BenefitsData {
  id: number;
  title: string;
  description: string;
  list: string[];
  img: string;
}

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.css'],
  standalone: true,
  imports: [TranslateModule, NgFor, NgClass, SwiperModule, SectionMainTitleComponent, ListOfProductComponent]
})
export class ProfessionalsComponent implements OnInit {
  activeSlide = 0

  benefitsData: BenefitsData[] = [
    {
      id: 1,
      title: 'benefitTitle',
      description: 'benefitDesc',
      list: ['benefitList1', 'benefitList2', 'benefitList3'],
      img: './assets/image/advantages-1.png',
    },
    {
      id: 2,
      title: 'benefitTitle2',
      description: 'benefitDesc2',
      list: ['benefitList4', 'benefitList5', 'benefitList6'],
      img: './assets/image/advantages-2.png',
    },
    {
      id: 3,
      title: 'benefitTitle3',
      description: 'benefitDesc3',
      list: [],
      img: './assets/image/advantages-3.png',
    },
  ];

  products: IndividualProductsData[] = [
    {
      title: 'individualProductTitle1',
      description: 'individualProductDesc1',

      list: [
        'dataInformations.list5',
        'dataInformations.list7',
        'dataInformations.list9',
        'analyticInfoBLock3',
        'dataInformations.list6',
        'individualProductList1',
        'individualProductList2',
        'dataInformations.list3',
      ],
      img: './assets/image/prof-product-0.jpg',
      link: '../products/apex-pro',
    },
    {
      title: 'individualProductTitle2',
      description: 'individualProductDesc2',

      list: [
        'networkingWorkText',
        'individualProductList3',
        'individualProductList4',
        'individualProductList5',
        'analyticInfoBLock1',
        'individualProductList6',
      ],
      img: './assets/image/prof-product-1.png',
      link: '../products/apex-vr',
    },
    {
      title: 'individualProductTitle3',
      description: 'individualProductDesc3',
      list: [
        'individualProductList7',
        'individualProductList8',
        'individualProductList9',
        'individualProductList10',
        'individualProductList11',
        'individualProductList12',
        'individualProductList13',
        'individualProductList14',
        'individualProductList15',
      ],
      img: './assets/image/prof-product-2.png',
      link: '../products/analytic',
    },
    {
      title: 'individualProductTitle4',
      description: 'individualProductDesc4',

      list: [
        'individualProductList16',
        'individualProductList17',
        'individualProductList18',
        'individualProductList19',
        'individualProductList20',
      ],
      img: './assets/image/prof-product-3.png',
      link: '../products/advance-training-station',
    },
    {
      title: 'individualProductTitle5',
      description: 'individualProductDesc5',

      list: [
        'individualProductList20',
        'individualProductList21',
        'aspireList8',
        'aspireList2',
        'individualProductList22',
        'individualProductList23',
        'individualProductList24',
        'aspireList3',
      ],
      img: './assets/image/prof-product-4.jpg',
      link: '../products/advance-portable',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
