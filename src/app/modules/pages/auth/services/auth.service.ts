import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { Observable, Subject, catchError, tap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Registration } from '../model/registration.request';
import { Login } from '../model/login.request';
import { ConfirmUser } from '../model/comfirm.request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**
   */
  error$: Subject<string> = new Subject<string>();

  /**
   *
   * @param $base
   */
  constructor(private $base: BaseService) { }

  /**
   *
   * @param user
   * @returns
   */
  registration(user: Registration) {
    return this.$base.post('account/register/', user);
  }

  /**
   *
   * @param user
   * @returns
   */
  auth(user: Login) {
    return this.$base
      .post('account/login/', user)
      .pipe(tap(this.setToken), catchError(this.handleError.bind(this)));
  }

  /**
   *
   * @param user
   * @returns
   */
  confirm(user: ConfirmUser) {
    return this.$base.post('account/confirm/', user);
  }

  /**
   */
  get token(): string {
    return localStorage.getItem('access') ?? '';
  }

  /**
   *
   * @returns
   */
  isAuthintificate(): boolean {
    return !!this.token;
  }

  /**
   *
   */
  logout(): void {
    this.setToken(null);
  }

  /**
   *
   * @param error
   * @returns
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    const message = error.error.error;

    switch (message) {
      case 'Unauthorized':
        this.error$.next('Неверный логин или пароль');
        break;
    }

    return throwError(() => error);
  }

  /**
   *
   * @param response
   */
  private setToken(response: any): void {
    if (response) {
      localStorage.setItem('access', response!.access);
      localStorage.setItem('refresh', response!.refresh);
      return;
    }
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  }

  /**
   *
   * @param request
   * @returns
   */
  resetPassword(request: { phone: string }): Observable<{ detail: string }> {
    return this.$base.post('account/password-reset/', request);
  }

  /**
   *
   * @param request
   * @returns
   */
  confirmResetPassword(request: {
    phone: string;
    secure_code: string;
  }): Observable<{ token: string }> {
    return this.$base.post('account/password-reset/confirm/', request);
  }

  /**
   *
   * @param encoded_pk
   * @param token
   * @param request
   * @returns
   */
  setNewPassword(
    encoded_pk: string,
    token: string,
    request: { password: string }
  ) {
    return this.$base.patch(
      `account/password-reset/${encoded_pk}/${token}/`,
      request
    );
  }

  /**
   *
   * @param request
   * @returns
   */
  resendCode(request: { phone: string }) {
    return this.$base.post('account/resend/', request);
  }
}
