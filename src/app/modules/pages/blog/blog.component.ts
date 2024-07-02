import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { BlogService } from './services/blog.service';
import { Blog } from './models/blog.model';
import { Grid } from 'src/app/shared/models/grid.model';
import { Constants } from 'src/app/core/configs/constants';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateModule } from '@ngx-translate/core';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    TranslateModule,
    NgFor,
    NgClass,
    BlogCardComponent,
    NzButtonModule,
    NzSpinModule,
  ],
})
export class BlogComponent {
  $blog = inject(BlogService);

  blog?: Grid<Blog>;

  public get pageIndex(): number {
    return this.$blog.pageIndex;
  }
  public set pageIndex(v: number) {
    this.$blog.pageIndex = v;
  }

  get popular$() {
    return this.$blog.popular$;
  }

  readonly PAGE_SIZE = Constants.PAGE_SIZE;

  constructor() {
    this.$blog
      .getAll()
      .pipe(takeUntilDestroyed())
      .subscribe((blog) => (this.blog = blog));
  }

  /**
   *
   * @param pageIndex
   */
  handlePageIndexChange(pageIndex: number) {
    this.pageIndex = pageIndex;
    this.$blog.getAll().subscribe((blog) => {
      this.blog = {
        ...blog,
        results: [...this.blog!.results, ...blog.results],
      };
    });
  }
}
