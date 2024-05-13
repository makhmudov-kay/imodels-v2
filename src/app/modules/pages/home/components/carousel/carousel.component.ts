import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {
  NzCarouselBaseStrategy,
  NzCarouselComponent,
  NzCarouselModule,
} from 'ng-zorro-antd/carousel';
import { SvgRightComponent } from 'src/app/shared/svg/svg-right/svg-right.component';
import { Slide } from './slide.interface';
import { SLIDER_DATE } from './slider-data';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { SvgCircleArrowComponent } from 'src/app/shared/svg/svg-circle-arrow/svg-circle-arrow.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less'],
  standalone: true,
  imports: [
    NzCarouselModule,
    NgFor,
    NzButtonModule,
    SvgCircleArrowComponent,
    SvgRightComponent,
    TranslateModule,
    RouterLink,
  ],
})
export class CarouselComponent {
  effect = 'scrollx';
  /**
   *
   */
  banner: Slide[] = SLIDER_DATE;

  /**
   *
   */
  @ViewChild('carousel')
  carousel!: NzCarouselComponent;

  /**
   *
   */
  pre() {
    this.carousel.pre();
  }

  /**
   *
   */
  next() {
    this.carousel.next();
  }
}
