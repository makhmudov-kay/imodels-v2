import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { Constants } from 'src/app/core/configs/constants';
import { HttpParams } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Grid } from 'src/app/shared/models/grid.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  pageIndex = 1;
  constructor(private $base: BaseService) {}

  getAll(categoryId?: number, search?: string) {
    let params = new HttpParams()
      .append('page', this.pageIndex)
      .append('page_size', Constants.PAGE_SIZE);

    if (categoryId) {
      params = params.append('category_id', categoryId);
    }
    if (search) {
      params = params.append('search', search);
    }
    return this.$base.get<Grid<Product>>('shop/products/', params);
  }

  /**
   *
   * @returns
   */
  getProductsWithDiscount() {
    return this.$base.get<Product[]>('shop/sale/');
  }
}
