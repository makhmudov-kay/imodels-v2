import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { map } from 'rxjs';
import { ProductDetail } from '../models/product-detail.model';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  /**
   *
   * @param $base
   */
  constructor(private $base: BaseService) { }

  /**
   *
   * @param id
   * @returns
   */
  getProductById(id: string | null) {
    return this.$base.get<ProductDetail>(`shop/products/${id}/`).pipe(
      map((res) => res),
      map((res) => {
        if (res.items) {
          res.items.forEach((item) => {
            item.isOpened = false;
          });
          return res;
        }
        return res;
      })
    );
  }
}
