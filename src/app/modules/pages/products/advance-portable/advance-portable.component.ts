import { Component, OnInit } from '@angular/core';
import { ProductDetailSliderComponent } from '../product-detail/components/product-detail-slider/product-detail-slider.component';
import { ProductDetailInfoComponent } from '../product-detail/components/product-detail-info/product-detail-info.component';
import { MyTranslatePipe } from 'src/app/shared/pipes/my-translate.pipe';
import { AsyncPipe, NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ContactBannerComponent } from 'src/app/shared/components/contact-banner/contact-banner.component';
import { ContactFormComponent } from 'src/app/shared/components/contact-form/contact-form.component';

@Component({
  selector: 'app-advance-portable',
  templateUrl: './advance-portable.component.html',
  styleUrls: ['./advance-portable.component.css'],
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
export class AdvancePortableComponent {
  productInfo = {
    title: {
      en: 'LAPARO Advance Portable – Laparoscopic Simulator',
      ru: 'Портативный лапароскопический тренажер LAPARO Advance',
      uz: 'Lapara Advance portativ Laparoskopik trener',
    },
    contentTitle: 'advancePortableContent',
    text: [
      'advancePortableText1',
      'advancePortableText2',
      'advancePortableText3',
    ],
    slides: [
      { id: 1, image: './assets/image/portable-slide-1.jpg' },
      { id: 2, image: './assets/image/portable-slide-2.jpg' },
      { id: 3, image: './assets/image/portable-slide-3.png' },
      { id: 4, image: './assets/image/portable-slide-4.png' },
    ],
  };
}
