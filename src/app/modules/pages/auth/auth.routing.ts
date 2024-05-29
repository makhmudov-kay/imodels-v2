import { Route } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SecureCodeComponent } from './secure-code/secure-code.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';

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
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'confirm',
    component: ConfirmPasswordComponent
  },
  {
    path: 'secure-code',
    component: SecureCodeComponent
  },
] satisfies Route[];
