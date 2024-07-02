import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './modules/pages/auth/services/auth.guard';
import { OrdersComponent } from './modules/pages/cabinet/pages/orders/orders.component';
import { ProfileComponent } from './modules/pages/cabinet/pages/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./modules/pages/home/home.component').then(
        (m) => m.HomeComponent
      ),
    data: { title: 'iModels' },
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/pages/auth/auth.routing'),
    data: { title: 'iModelslogin' },
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/pages/products/products.routing'),
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./modules/pages/about-us/about-us.component').then(
        (m) => m.AboutUsComponent
      ),
    data: { title: 'iModelsAboutUs' },
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/pages/blog/blog.routing'),
  },

  {
    path: 'contacts',
    loadComponent: () =>
      import('./modules/pages/contacts/contacts.component').then(
        (m) => m.ContactsComponent
      ),
    data: { title: 'iModelscontacts' },
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./modules/pages/cart/cart.component').then(
        (m) => m.CartComponent
      ),
    data: { title: 'iModelscart' },
  },
  {
    path: 'cabinet',
    loadComponent: () =>
      import('./modules/pages/cabinet/cabinet.component').then(
        (m) => m.CabinetComponent
      ),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'orders',
      },
      {
        path: 'orders',
        component: OrdersComponent,
        data: { title: 'iModelsorders' },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { title: 'iModelsdetails' },
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
