import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Settings } from '../helpers/settings';
import { AuthService } from 'src/app/modules/pages/auth/services/auth.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private settings: Settings, private auth$: AuthService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.auth$.token;

    let headers = req.headers
      .set('accept-language', this.settings.language)
      .set('currency', this.settings.currency);

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    const authReq = req.clone({ headers });
    return next.handle(authReq);
  }
}
