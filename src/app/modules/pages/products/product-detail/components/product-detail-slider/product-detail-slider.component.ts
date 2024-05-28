import { AsyncPipe, NgFor } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import { SvgTopForSlideComponent } from 'src/app/shared/svg/svg-top-for-slide/svg-top-for-slide.component';
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
import { ImageItem } from '../../models/product-detail.model';
import { LanguageModel } from 'src/app/shared/models/language.model';
import { MyTranslatePipe } from 'src/app/shared/pipes/my-translate.pipe';
import { SvgRightComponent } from 'src/app/shared/svg/svg-right/svg-right.component';

SwiperCore.use([FreeMode, Navigation, Thumbs]);
@Component({
  selector: 'app-product-detail-slider',
  templateUrl: './product-detail-slider.component.html',
  styleUrls: ['./product-detail-slider.component.css'],
  standalone: true,
  imports: [SwiperModule, NgFor, SvgTopForSlideComponent, MyTranslatePipe, AsyncPipe, SvgRightComponent]
})
export class ProductDetailSliderComponent {
  /**
   *
   */
  @Input()
  slides!: ImageItem[];
  /**
   *
   */
  @Input()
  title!: LanguageModel;

  /**
  *
  */
  thumbsSwiper: any;

  /**
   *
   */
  @ViewChild('swiper')
  swiper!: SwiperComponent;

  /**
   *
   */
  @ViewChild('swiperView')
  swiperView!: SwiperComponent;


  /**
   *
   */
  pre() {
    this.swiper.swiperRef.slidePrev();
  }

  /**
   *
   */
  next() {
    this.swiper.swiperRef.slideNext();
  }
}
