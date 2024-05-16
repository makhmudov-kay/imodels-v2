import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { Category, CategoryWithChildren } from '../models/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  /**
   *
   */
  private _category$?: Observable<Category[]>;
  public get category$(): Observable<Category[]> {
    if (!this._category$) {
      this._category$ = this.getAll();
    }
    return this._category$;
  }

  /**
   *
   */
  private _subCategory$?: Observable<CategoryWithChildren[]>;
  public get subCategory$(): Observable<CategoryWithChildren[]> {
    if (!this._subCategory$) {
      this._subCategory$ = this.getAllWithChildren();
    }
    return this._subCategory$;
  }

  constructor(private $base: BaseService) {}

  private getAll() {
    return this.$base.get<Category[]>('shop/subcategories/');
  }

  private getAllWithChildren() {
    return this.$base.get<CategoryWithChildren[]>('shop/categories/');
  }
}
