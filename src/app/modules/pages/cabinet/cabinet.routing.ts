import { Route } from '@angular/router';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const ChildrenRoutes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'orders'
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
] satisfies Route[];

