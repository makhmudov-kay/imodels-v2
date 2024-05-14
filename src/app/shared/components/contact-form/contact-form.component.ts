import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
} from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SvgUserComponent } from '../../svg/svg-user/svg-user.component';
import { TranslateModule } from '@ngx-translate/core';
import { SvgPhoneComponent } from '../../svg/svg-phone/svg-phone.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.less'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    SvgUserComponent,
    TranslateModule,
    SvgPhoneComponent,
    NgClass,
  ],
})
export class ContactFormComponent implements OnInit {
  /**
   *
   */
  @Input()
  isContactsPage!: boolean;

  /**
   *
   */
  form!: UntypedFormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [null],
      phone: [null],
      message: [null],
    });
  }

  submitForm() {}
}
