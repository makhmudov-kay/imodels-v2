import { Route } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogDetailsComponent } from '../blog-details/blog-details.component';

export default [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: BlogComponent,
    data: { title: 'iModelsblog' },
  },
  {
    path: ':id',
    component: BlogDetailsComponent,
    data: { title: 'iModelsblog' },
  },
] satisfies Route[];
