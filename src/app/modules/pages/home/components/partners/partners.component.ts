import { Component, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import { PARTNERS } from './partners-data';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor } from '@angular/common';
import { SvgCircleArrowComponent } from 'src/app/shared/svg/svg-circle-arrow/svg-circle-arrow.component';
import { SectionTitleComponent } from 'src/app/shared/components/section-title/section-title.component';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.less'],
  standalone: true,
  imports: [
    TranslateModule,
    SwiperModule,
    NgFor,
    SvgCircleArrowComponent,
    SectionTitleComponent,
  ],
})
export class PartnersComponent {
  /**
   *
   */
  data = PARTNERS;

  /**
   *
   */
  @ViewChild('swiper')
  swiper!: SwiperComponent;

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
