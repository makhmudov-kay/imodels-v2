import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(
    @Inject('API_URL') private apiUrl: string,
    private http: HttpClient
  ) {}

  get<T>(url: string, params?: HttpParams) {
    return this.http
      .get<T>(`${this.apiUrl}${url}`, { params })
      .pipe(shareReplay(1));
  }

  post<T>(url: string, body: any) {
    return this.http.post<T>(`${this.apiUrl}${url}`, body);
  }

  patch<T>(url: string, body: any) {
    return this.http.patch<T>(`${this.apiUrl}${url}`, body);
  }

  put<T>(url: string, body: any) {
    return this.http.put<T>(`${this.apiUrl}${url}`, body);
  }

  delete<T>(url: string) {
    return this.http.delete<T>(`${this.apiUrl}${url}`);
  }
}
