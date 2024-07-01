import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BaseService } from 'src/app/core/services/base.service';
import { Constants } from 'src/app/core/configs/constants';
import { Blog } from '../models/blog.model';
import { Grid } from 'src/app/shared/models/grid.model';
import { BlogDetails } from '../models/blog-details.model';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BlogService {
  pageIndex = 1;

  private _popular$?: Observable<Blog[]>;
  public get popular$(): Observable<Blog[]> {
    if (!this._popular$) {
      this._popular$ = this.getPopular();
    }
    return this._popular$;
  }

  constructor(private $base: BaseService) {}

  getAll() {
    const params = new HttpParams()
      .append('page', this.pageIndex)
      .append('page_size', Constants.PAGE_SIZE);
    return this.$base.get<Grid<Blog>>('shop/blog/', params);
  }

  getById(id: number) {
    return this.$base.get<BlogDetails>(`shop/blog/${id}/`);
  }

  getPopular() {
    const params = new HttpParams()
      .append('page', this.pageIndex)
      .append('page_size', 3);
    return this.$base
      .get<Grid<Blog>>('shop/blog-popular/', params)
      .pipe(map((w) => w.results));
  }
}
