import {
  NgFor,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SvgCallComponent } from 'src/app/shared/svg/svg-call/svg-call.component';
import { SvgLocationComponent } from 'src/app/shared/svg/svg-location/svg-location.component';
import { SvgMailComponent } from 'src/app/shared/svg/svg-mail/svg-mail.component';
import { SvgUserComponent } from 'src/app/shared/svg/svg-user/svg-user.component';

@Component({
  selector: 'app-contacts-info',
  templateUrl: './contacts-info.component.html',
  styleUrls: ['./contacts-info.component.css'],
  standalone: true,
  imports: [
    TranslateModule,
    SvgLocationComponent,
    SvgMailComponent,
    SvgCallComponent,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgIf,
  ],
})
export class ContactsInfoComponent {
  company = [
    {
      title: 'addressTitle',
      text: '{{ "city" | translate }} <br />{{ "district" | translate }} {{ "address" | translate }}',
      type: 1,
    },
    {
      title: 'E-mail',
      text: 'shukrullayev99@gmail.com',
      type: 2,
    },
    {
      title: 'phone',
      text: '+998 90 013 70 77',
      type: 3,
    },
  ];
}
