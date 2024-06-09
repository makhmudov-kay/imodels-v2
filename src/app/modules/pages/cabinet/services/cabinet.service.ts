import { Injectable } from '@angular/core';
import { OrderService } from '../../cart/services/order.service';
import { BaseService } from 'src/app/core/services/base.service';
import { OrderList } from '../../cart/models/order.request';
import { Observable } from 'rxjs';
import { UserDetail } from '../../auth/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class CabinetService {

  constructor(private $base: BaseService, private $order: OrderService) { }

  /**
   * 
   * @returns 
   */
  getUserInfo(): Observable<UserDetail> {
    return this.$base.get('account/user-detail/');
  }

  /**
   * 
   * @returns 
   */
  getOrderList(): Observable<OrderList[]> {
    return this.$order.getOrderList()
  }
}
