import { Component, ViewChild } from '@angular/core';
import { BlogCardComponent } from '../../../blog/components/blog-card/blog-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor, NgIf } from '@angular/common';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import { SvgCircleArrowComponent } from 'src/app/shared/svg/svg-circle-arrow/svg-circle-arrow.component';
import { SectionTitleComponent } from 'src/app/shared/components/section-title/section-title.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  standalone: true,
  imports: [
    BlogCardComponent,
    TranslateModule,
    NgFor,
    SwiperModule,
    SvgCircleArrowComponent,
    NgIf,
    SectionTitleComponent,
  ],
})
export class NewsComponent {
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
