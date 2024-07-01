import { Component } from '@angular/core';
import { ProductDetailSliderComponent } from '../product-detail/components/product-detail-slider/product-detail-slider.component';
import { ProductDetailInfoComponent } from '../product-detail/components/product-detail-info/product-detail-info.component';
import { MyTranslatePipe } from 'src/app/shared/pipes/my-translate.pipe';
import { AsyncPipe, NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ContactBannerComponent } from 'src/app/shared/components/contact-banner/contact-banner.component';
import { ContactFormComponent } from 'src/app/shared/components/contact-form/contact-form.component';

@Component({
  selector: 'app-training-station',
  templateUrl: './training-station.component.html',
  styleUrls: ['./training-station.component.css'],
  standalone: true,
  imports: [
    ProductDetailSliderComponent,
    ProductDetailInfoComponent,
    MyTranslatePipe,
    AsyncPipe,
    NgFor,
    TranslateModule,
    ContactBannerComponent,
    ContactFormComponent,
  ],
})
export class TrainingStationComponent {
  productInfo = {
    title: {
      ru: 'LAPARO Advance Training Station – Лапароскопический симулятор',
      uz: 'LAPARO Advance Training Station – Лапароскопический симулятор',
      en: 'LAPARO Advance Training Station – Laparoscopic Simulator',
    },
    contentTitle: 'trainingStation1',
    text: [
      'trainingStation2',
      'trainingStation3',
      'trainingStation4',
      'trainingStation5',
      'networkingWorkTitle1',
      'trainingStation6',
    ],
    slides: [
      { id: 1, image: './assets/image/training-slide-1.jpg' },
      { id: 2, image: './assets/image/training-slide-2.jpg' },
      { id: 3, image: './assets/image/training-slide-3.jpg' },
      { id: 4, image: './assets/image/training-slide-4.png' },
      { id: 5, image: './assets/image/training-slide-5.png' },
      { id: 6, image: './assets/image/training-slide-6.png' },
    ],
  };
}
