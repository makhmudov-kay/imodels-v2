import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TouchedImageComponent } from 'src/app/shared/components/touched-image/touched-image.component';
import { ProductImage } from '../product-detail/models/product-image.model';
import { AboutSectionComponent } from '../../home/components/about-section/about-section.component';
import { Specification } from 'src/app/shared/components/specification/specification.model';
import { SpecificationComponent } from 'src/app/shared/components/specification/specification.component';
import { ContactBannerComponent } from 'src/app/shared/components/contact-banner/contact-banner.component';
import { ContactFormComponent } from 'src/app/shared/components/contact-form/contact-form.component';

export interface DataInformation {
  img: string;
  imageList: ImageList[];
  title: string;
  text: string;
  list: string[];
}

export interface ImageList {
  title: string;
  img: string;
}

@Component({
  selector: 'app-apex-pro',
  templateUrl: './apex-pro.component.html',
  styleUrls: ['./apex-pro.component.css'],
  standalone: true,
  imports: [
    TranslateModule,
    NgFor,
    NgClass,
    TouchedImageComponent,
    AboutSectionComponent,
    SpecificationComponent,
    ContactBannerComponent,
    ContactFormComponent,
  ],
})
export class ApexProComponent implements OnInit {
  dataInformations: DataInformation[] = [
    {
      img: './assets/image/apex-info-1.jpg',
      imageList: [
        {
          title: 'dataInformations.imageList.title',
          img: './assets/image/apex-pro-info-1.jpg',
        },
        {
          title: 'dataInformations.imageList.title2',
          img: './assets/image/apex-pro-info-2.jpg',
        },
        {
          title: 'dataInformations.imageList.title3',
          img: './assets/image/apex-pro-info-3.jpg',
        },
      ],
      title: 'dataInformations.title',
      text: 'dataInformations.text',
      list: [
        'dataInformations.list1',
        'dataInformations.list2',
        'dataInformations.list3',
        'dataInformations.list4',
      ],
    },
    {
      img: './assets/image/apex-info-2.jpg',
      imageList: [
        {
          title: 'dataInformations.imageList.title4',
          img: './assets/image/apex-pro-info-4.jpg',
        },
        {
          title: 'dataInformations.imageList.title5',
          img: './assets/image/apex-pro-info-5.jpg',
        },
        {
          title: 'dataInformations.imageList.title6',
          img: './assets/image/apex-pro-info-6.jpg',
        },
      ],
      title: 'dataInformations.title2',
      text: 'dataInformations.text2',
      list: [
        'dataInformations.list5',
        'dataInformations.list6',
        'dataInformations.list7',
        'dataInformations.list8',
        'dataInformations.list9',
      ],
    },
    {
      img: './assets/image/apex-info-3.jpg',
      imageList: [
        {
          title: 'dataInformations.imageList.title7',
          img: './assets/image/apex-pro-info-7.jpg',
        },
        {
          title: 'dataInformations.imageList.title8',
          img: './assets/image/apex-pro-info-8.jpg',
        },
        {
          title: 'dataInformations.imageList.title9',
          img: './assets/image/apex-pro-info-9.jpg',
        },
      ],
      title: 'dataInformations.title3',
      text: 'dataInformations.text3',
      list: [
        'dataInformations.list10',
        'dataInformations.list11',
        'dataInformations.list12',
      ],
    },
  ];

  /**
   */
  apexImageData: ProductImage = {
    img: './assets/image/apex-pro-img-0.png',
    type: 'apex-pro',
    info: [
      {
        img: './assets/image/apex-pro-img-1.jpg',
        title: 'apexImageDataTitle',
        text: 'apexImageDataText',
      },
      {
        img: './assets/image/apex-pro-img-2.jpg',
        title: 'apexImageDataTitle2',
        text: 'apexImageDataText2',
      },
      {
        img: './assets/image/apex-pro-img-3.jpg',
        title: 'apexImageDataTitle3',
        text: 'apexImageDataText3',
      },
      {
        img: './assets/image/apex-pro-img-4.jpg',
        title: 'apexImageDataTitle4',
        text: 'apexImageDataText4',
      },
      {
        img: './assets/image/apex-pro-img-5.jpg',
        title: 'apexImageDataTitle5',
        text: 'apexImageDataText5',
      },
      {
        img: './assets/image/apex-pro-img-6.jpg',
        title: 'apexImageDataTitle6',
        text: 'apexImageDataText6',
      },
    ],
  };

  /**
   */
  apexSpecification: Specification = {
    title: 'specification',
    list: [
      {
        category: 'mainFeature',
        options: [
          { title: 'optionTitle1', value: 'optionValue1' },
          { title: '', value: 'optionValue2' },
          { title: '', value: 'optionValuePediatric' },
          {
            title: 'camera',
            value: 'optionValueApex',
          },
          {
            title: '',
            value: 'optionValueApex2',
          },
          {
            title: 'optionTitleApex',
            value: 'optionValueApex3',
          },
          {
            title: 'optionTitleApex2',
            value: 'optionValueApex4',
          },
          {
            title: '',
            value: 'optionValueApex5',
          },
          {
            title: 'optionValueApex6',
            value: 'optionValueApex7',
          },
          {
            title: 'optionValueApex8',
            value: 'optionValueApex9',
          },
          {
            title: 'training',
            value: 'optionValue7',
          },
          {
            title: 'optionValueApex10',
            value: 'optionValue8',
          },
          {
            title: '',
            value: 'optionValueApex11',
          },
          {
            title: 'optionValueApex12',
            value: 'optionValueApex13',
          },
          {
            title: '',
            value: 'optionValueApex14',
          },
          {
            title: '',
            value: '',
          },
        ],
      },
      {
        category: 'software',
        options: [
          { title: 'optionTitle8', value: '✅' },
          { title: 'optionTitle9', value: '✅' },
          { title: 'optionTitle10', value: '✅' },
          { title: 'optionTitle11', value: 'optionValue13' },
          {
            title: '',
            value: 'optionValue14',
          },
          {
            title: '',
            value: 'optionValue15',
          },
          {
            title: '',
            value: 'optionValue16',
          },
          {
            title: '',
            value: 'optionValue17',
          },
          {
            title: '',
            value: 'optionValueApex15',
          },
          {
            title: '',
            value: 'optionValueApex16',
          },
          {
            title: '',
            value: 'optionValueApex17',
          },
          {
            title: 'optionValueApex18',
            value: '✅',
          },
          {
            title: 'optionValueApex19',
            value: '✅',
          },
          {
            title: 'analyticInfoBLock5',
            value: '✅',
          },
          {
            title: 'optionTitle15',
            value: '✅',
          },
          {
            title: 'optionTitle16',
            value: 'optionTitle19',
          },
          {
            title: 'optionTitle17',
            value: '✅',
          },
          {
            title: 'optionTitle18',
            value: '✅',
          },
        ],
      },
      {
        category: 'hardware',
        options: [
          { title: 'screen', value: 'optionValue10' },
          {
            title: 'optionTitle5',
            value: 'optionValueApex20',
          },
          {
            title: 'optionTitle7',
            value: 'optionValue11',
          },
          {
            title: '',
            value: 'optionValue12',
          },
          {
            title: 'keyboard',
            value: 'optionValueApex21',
          },
          {
            title: 'optionValueApex22',
            value: '2',
          },
          {
            title: 'optionValueApex23',
            value: '✅',
          },
        ],
      },
      {
        category: 'apexVRSpecificationTitle',
        options: [
          { title: 'optionValueApex24', value: 'optionValueApex25' },
          { title: 'optionValueApex26', value: 'optionValueApex27' },
          { title: 'optionValueApex28', value: 'optionValueApex29' },
          { title: 'optionValueApex30', value: 'optionValueApex31' },
          { title: 'optionValueApex32', value: 'optionValueApex33' },
          { title: 'optionValueApex34', value: 'optionValueApex35' },
        ],
      },
    ],
  };

  constructor() {}

  ngOnInit() {}
}
