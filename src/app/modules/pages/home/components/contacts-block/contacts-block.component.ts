import { Component } from '@angular/core';
import { ContactBannerComponent } from 'src/app/shared/components/contact-banner/contact-banner.component';
import { ContactFormComponent } from 'src/app/shared/components/contact-form/contact-form.component';

@Component({
  selector: 'app-contacts-block',
  templateUrl: './contacts-block.component.html',
  styleUrls: ['./contacts-block.component.css'],
  standalone: true,
  imports: [ContactBannerComponent, ContactFormComponent],
})
export class ContactsBlockComponent {}
