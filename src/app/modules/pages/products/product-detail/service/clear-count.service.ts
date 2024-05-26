import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClearCountService {
  clearCount$ = new BehaviorSubject<boolean>(false);
}
