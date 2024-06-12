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
  /**
   */
  url = 'account/user-detail/'

  /**
   * 
   * @param $base 
   * @param $order 
   */
  constructor(private $base: BaseService, private $order: OrderService) { }

  /**
   * 
   * @returns 
   */
  getUserInfo(): Observable<UserDetail> {
    return this.$base.get(this.url);
  }

  /**
   * 
   * @param request 
   * @returns 
   */
  editProfile(request: any) {
    return this.$base.put(this.url, request)
  }

  /**
   * 
   * @param request 
   * @returns 
   */
  editSingleFields(request: any) {
    return this.$base.patch(this.url, request)
  }

  /**
   * 
   * @param secure_code 
   * @returns 
   */
  confirmEditProfile(secure_code: string) {
    return this.$base.post(`${this.url}confirm/`, { secure_code })
  }

  /**
   * 
   * @returns 
   */
  getOrderList(): Observable<OrderList[]> {
    return this.$order.getOrderList()
  }
}
