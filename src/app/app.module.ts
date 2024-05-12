import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { DecimalPipe, registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgxsModule } from '@ngxs/store';
import { DataState } from './shared/store/data/data.state';
import { environment } from 'src/environments/environment.prod';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { HeaderInterceptor } from './core/interceptors/header.interceptor';
import { HandleErrorInterceptor } from './core/interceptors/handle.error.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

registerLocaleData(ru);
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    NgxsModule.forRoot([DataState], {}),

    HeaderComponent,
    FooterComponent,
  ],
  providers: [
    provideEnvironmentNgxMask(),
    { provide: NZ_I18N, useValue: ru_RU },
    {
      provide: 'API_URL',
      useValue: environment.endpoint,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HandleErrorInterceptor,
      multi: true,
    },
    DecimalPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
