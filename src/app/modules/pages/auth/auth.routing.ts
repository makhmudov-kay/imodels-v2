import { Route } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export default [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-up'
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
] satisfies Route[];
