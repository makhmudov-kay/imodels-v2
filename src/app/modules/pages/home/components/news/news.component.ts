import { Component, ViewChild, inject } from '@angular/core';
import { BlogCardComponent } from '../../../blog/components/blog-card/blog-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor, NgIf } from '@angular/common';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import { SvgCircleArrowComponent } from 'src/app/shared/svg/svg-circle-arrow/svg-circle-arrow.component';
import { SectionTitleComponent } from 'src/app/shared/components/section-title/section-title.component';
import { BlogService } from '../../../blog/services/blog.service';
import { Blog } from '../../../blog/models/blog.model';
import { Grid } from 'src/app/shared/models/grid.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  $blog = inject(BlogService);

  blog?: Grid<Blog>;

  /**
   *
   */
  @ViewChild('swiper')
  swiper!: SwiperComponent;

  constructor() {
    this.$blog
      .getAll()
      .pipe(takeUntilDestroyed())
      .subscribe((blog) => (this.blog = blog));
  }

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
