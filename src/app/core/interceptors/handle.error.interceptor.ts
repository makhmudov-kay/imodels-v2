import { Inject, Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/pages/auth/services/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable()
export class HandleErrorInterceptor implements HttpInterceptor {
  /**
   *
   */
  constructor(
    private $auth: AuthService,
    private router: Router,
    private $notification: NzNotificationService
  ) {}

  /**
   *
   * @param req
   * @param next
   * @returns
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Unauthorized) {
          this.$auth.logout();
          this.router.navigate(['./', 'auth/sign-in']);
          return throwError(() => error);
        }

        const errorCustom = this.getServerErrors(error);
        this.$notification.error('Error(s)', errorCustom);
        return throwError(() => errorCustom);
      })
    );
  }

  private getServerErrors(error: HttpErrorResponse) {
    if (!navigator.onLine) {
      return 'Offline';
    }

    switch (error.status) {
      case HttpStatusCode.PayloadTooLarge:
        return 'PayloadTooLarge';

      case HttpStatusCode.Forbidden:
        return 'Forbidden';

      case HttpStatusCode.InternalServerError:
        return 'InternalServerError';

      case HttpStatusCode.NotFound:
        return 'NotFound';

      default:
        return this.getErrorFromServer(error);
    }
  }

  /**
   *
   * @param error
   * @returns
   */
  private getErrorFromServer(error: HttpErrorResponse) {
    const errors = error.error.error;
    const firstError = error.error[Object.keys(error.error)[0]][0];

    if (firstError) {
      return firstError;
    }
    if (errors) {
      return error.error.error;
    }
    return { unknownError: JSON.stringify(error) };
  }
}
