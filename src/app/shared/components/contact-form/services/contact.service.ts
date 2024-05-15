import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { ContactRequest } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private $base: BaseService) {}

  sendInfo(data: ContactRequest) {
    return this.$base.post('shop/contact/', data);
  }
}
