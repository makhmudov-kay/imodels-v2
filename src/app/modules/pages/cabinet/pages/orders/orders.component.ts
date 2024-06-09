import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { SvgDownComponent } from 'src/app/shared/svg/svg-down/svg-down.component';
import { SvgTrashComponent } from 'src/app/shared/svg/svg-trash/svg-trash.component';
import { CabinetService } from '../../services/cabinet.service';
import { Observable, map } from 'rxjs';
import { OrderList } from '../../../cart/models/order.request';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzImageModule } from 'ng-zorro-antd/image';
import { MyTranslatePipe } from 'src/app/shared/pipes/my-translate.pipe';
import { MyCurrencyPipe } from 'src/app/shared/pipes/my-currency.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.less'],
  standalone: true,
  imports: [NzCollapseModule, NgFor, TranslateModule, SvgDownComponent, NgClass, SvgTrashComponent, NgIf, AsyncPipe, NzResultModule, MyTranslatePipe, MyCurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent implements OnInit {
  /**
   */
  order$!: Observable<OrderList[]>;
  currentId!: number | null;
  fallback = './assets/image/not-found.png';
  /**
   *
   */
  $order = inject(CabinetService);
  private $cd = inject(ChangeDetectorRef)
  private router = inject(Router)

  /**
   * 
   */
  ngOnInit(): void {
    this.getOrders();
  }

  /**
   * 
   */
  private getOrders() {
    this.order$ = this.$order.getOrderList().pipe(map((result) => result));
  }

  /**
   * 
   * @param active 
   * @param index 
   */
  onActiveChange(active: boolean, index: number) {
  }

  navigateToProduct(id: number) {
    this.router.navigate(['../products', id]);
  }
}
