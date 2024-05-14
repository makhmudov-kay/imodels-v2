import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ContactBannerComponent } from 'src/app/shared/components/contact-banner/contact-banner.component';
import { ContactFormComponent } from 'src/app/shared/components/contact-form/contact-form.component';
import { ContactsInfoComponent } from './components/contacts-info/contacts-info.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  standalone: true,
  imports: [ContactBannerComponent, TranslateModule, ContactFormComponent, ContactsInfoComponent],
})
export class ContactsComponent {}
