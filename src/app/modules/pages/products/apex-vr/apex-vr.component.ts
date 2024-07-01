import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TouchedImageComponent } from 'src/app/shared/components/touched-image/touched-image.component';
import { ProductImage } from '../product-detail/models/product-image.model';
import { FeaturesComponent } from './features/features.component';
import { NetworkComponent } from './network/network.component';
import { SpecificationComponent } from 'src/app/shared/components/specification/specification.component';
import { ContactBannerComponent } from 'src/app/shared/components/contact-banner/contact-banner.component';
import { ContactFormComponent } from 'src/app/shared/components/contact-form/contact-form.component';
import { Specification } from 'src/app/shared/components/specification/specification.model';
import { PartnersComponent } from '../../home/components/partners/partners.component';
import { InfoBlocksComponent } from './info-blocks/info-blocks.component';

@Component({
  selector: 'app-apex-vr',
  templateUrl: './apex-vr.component.html',
  styleUrls: ['./apex-vr.component.css'],
  standalone: true,
  imports: [
    TranslateModule,
    NgFor,
    TouchedImageComponent,
    FeaturesComponent,
    NetworkComponent,
    SpecificationComponent,
    ContactBannerComponent,
    ContactFormComponent,
    PartnersComponent,
    InfoBlocksComponent,
  ],
})
export class ApexVrComponent {
  /**
   */
  infoBlockData = [
    {
      img: './assets/image/apex-vr-img.png',
      title: 'infoBlockData.title1',
    },
    {
      img: './assets/image/apex-vr-img-2.png',
      title: 'infoBlockData.title2',
    },
    {
      img: './assets/image/apex-vr-img-3.png',
      title: 'infoBlockData.title3',
    },
    {
      img: './assets/image/apex-vr-img-4.png',
      title: 'infoBlockData.title4',
    },
    {
      img: './assets/image/apex-vr-img-5.png',
      title: 'infoBlockData.title5',
    },
    {
      img: './assets/image/apex-vr-img-6.png',
      title: 'infoBlockData.title6',
    },
  ];

  apexVRFeatures = {
    first: {
      title: 'apexVRFeatures.title1',
      text: 'apexVRFeatures.text1',
      img: './assets/image/icon-feature-1.png',
    },
    second: {
      title: 'apexVRFeatures.title2',
      text: 'apexVRFeatures.text2',
      img: './assets/image/icon-feature-2.png',
    },
    third: {
      title: 'apexVRFeatures.title3',
      text: 'apexVRFeatures.text3',
      img: './assets/image/icon-feature-3.png',
    },
    fourth: {
      title: 'apexVRFeatures.title4',
      text: 'apexVRFeatures.text4',
      img: './assets/image/icon-feature-4.png',
    },
    fivth: {
      title: 'apexVRFeatures.title5',
      text: 'apexVRFeatures.text5',
      img: './assets/image/icon-feature-5.png',
    },
    sixth: {
      title: 'apexVRFeatures.title6',
      text: 'apexVRFeatures.text6',
      img: './assets/image/icon-feature-6.png',
    },
  };

  networking = {
    title: 'networkingTitle1',
    description: 'networkingDescription1',
    works: [
      {
        title: 'networkingWorkTitle',
        text: 'networkingWorkText',
        value: 1,
      },
      {
        title: 'networkingWorkTitle1',
        text: 'networkingWorkText1',
        value: 2,
      },
      {
        title: 'networkingWorkTitle2',
        text: 'networkingWorkText2',
        value: 3,
      },
    ],
  };

  /**
   */
  apexVRImageData: ProductImage = {
    img: './assets/image/apex-vr-image.png',
    type: 'apex-vr',
    info: [
      {
        img: './assets/image/apex-vr-image-1.png',
        title: 'apexVRImageData.title1',
        text: 'apexVRImageData.text1',
      },
      {
        img: './assets/image/apex-vr-image-2.jpeg',
        title: 'apexVRImageData.title2',
        text: 'apexVRImageData.text2',
      },
      {
        img: './assets/image/apex-vr-image-3.jpg',
        title: 'apexVRImageData.title3',
        text: 'apexVRImageData.text3',
      },
      {
        img: './assets/image/apex-vr-image-4.jpg',
        title: 'apexVRImageData.title4',
        text: 'apexVRImageData.text4',
      },
      {
        img: './assets/image/apex-vr-image-5.jpg',
        title: 'apexVRImageData.title5',
        text: 'apexVRImageData.text5',
      },
      {
        img: './assets/image/apex-vr-image-6.jpg',
        title: 'apexVRImageData.title6',
        text: 'apexVRImageData.text6',
      },
      {
        img: './assets/image/apex-vr-image-7.jpg',
        title: 'apexVRImageData.title7',
        text: 'apexVRImageData.text7',
      },
      {
        img: './assets/image/apex-vr-image-8.jpg',
        title: 'apexVRImageData.title8',
        text: 'apexVRImageData.text8',
      },
      {
        img: './assets/image/apex-vr-image-9.jpg',
        title: 'apexVRImageData.title9',
        text: 'apexVRImageData.text9',
      },
      {
        img: './assets/image/apex-vr-image-10.jpg',
        title: 'apexVRImageData.title10',
        text: 'apexVRImageData.text10',
      },
    ],
  };

  /**
   */
  apexVRSpecification: Specification = {
    title: 'apexVRSpecificationTitle',
    list: [
      {
        category: 'mainFeature',
        options: [
          { title: 'optionTitle1', value: 'optionValue1' },
          { title: '', value: 'optionValue2' },
          {
            title: 'camera',
            value: 'optionValue3',
          },
          {
            title: '',
            value: 'degMovement',
          },
          {
            title: '',
            value: 'focusRing',
          },
          {
            title: '',
            value: 'digitalZone',
          },
          {
            title: '',
            value: 'LEDadjustment',
          },
          {
            title: 'optionTitle2',
            value: 'optionValue4',
          },
          {
            title: '',
            value: 'optionValue5',
          },
          {
            title: 'optionTitle3',
            value: 'optionValue6',
          },
          {
            title: 'optionTitle4',
            value: 'optionValue7',
          },
          {
            title: '',
            value: 'optionValue8',
          },
          {
            title: 'optionTitle5',
            value: 'optionValue9',
          },
          {
            title: 'optionTitle6',
            value: 'optionValue10',
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
            value: 'optionValue18',
          },
          {
            title: 'optionTitle12',
            value: '✅',
          },
          {
            title: 'optionTitle13',
            value: '✅',
          },
          {
            title: 'optionTitle14',
            value: '✅',
          },
          {
            title: 'optionTitle15',
            value: '✅',
          },
          {
            title: 'optionTitle16',
            value: 'optionValue19',
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
        category: 'dimension',
        options: [
          { title: 'optionTitle19', value: '90kg' },
          {
            title: 'optionTitle20',
            value: '66sm',
          },
          {
            title: 'optionTitle21',
            value: '123sm',
          },
          {
            title: 'optionTitle22',
            value: '175195sm',
          },
        ],
      },
      {
        category: 'apexVRSpecificationTitle',
        options: [
          { title: 'apexVRSpecificationTitle', value: 'optionValueApex33' },
          { title: 'optionValueApex28', value: 'optionValueApex29' },
          { title: 'optionValueApex30', value: 'optionValueApex31' },
        ],
      },
    ],
  };
}
