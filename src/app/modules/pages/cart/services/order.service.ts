import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/core/services/base.service';
import { OrderList, OrderRequest } from '../models/order.request';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  /**
   */
  url = 'shop/order/';

  /**
   *
   * @param $base
   */
  constructor(private $base: BaseService) {}

  /**
   *
   * @param order
   * @returns
   */
  sendOrder(order: OrderRequest[]) {
    return this.$base.post(this.url, order);
  }

  /**
   *
   * @returns
   */
  getOrderList(): Observable<OrderList[]> {
    return this.$base.get(this.url);
  }
}
