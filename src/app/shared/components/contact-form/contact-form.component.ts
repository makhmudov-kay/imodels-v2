import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SvgUserComponent } from '../../svg/svg-user/svg-user.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SvgPhoneComponent } from '../../svg/svg-phone/svg-phone.component';
import { NgClass } from '@angular/common';
import { ContactService } from './services/contact.service';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { markAsDirty } from 'src/app/utils/utilits';
import { NgDestroy } from 'src/app/core/services/ng-destroy.service';
import { takeUntil } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzButtonModule } from 'ng-zorro-antd/button';

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
    NgxMaskDirective,
    NzButtonModule,
  ],
  providers: [provideNgxMask(), NgDestroy],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent {
  /**
   *
   */
  @Input()
  isContactsPage!: boolean;

  /**
   *
   */
  PHONE_MASK = '(00) 000-00-00';
  PHONE_PREFIX = '+998 ';

  /**
   *
   */
  isLoading = false;

  /**
   *
   */
  private $contact = inject(ContactService);
  private $destroy = inject(NgDestroy);
  private $message = inject(NzMessageService);
  private $translate = inject(TranslateService);
  private $cd = inject(ChangeDetectorRef);
  private fb = inject(FormBuilder);

  /**
   *
   */
  form = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });

  /**
   *
   * @param type
   */
  private createMessage(): void {
    this.$message.success(this.$translate.instant('successMessage'));
  }

  /**
   *
   * @returns
   */
  send() {
    if (this.form.invalid) {
      markAsDirty(this.form);
      return;
    }

    this.isLoading = true;
    const request = this.form.getRawValue();
    request.phone = '998' + request.phone;

    this.$contact
      .sendInfo(request)
      .pipe(takeUntil(this.$destroy))
      .subscribe(() => {
        this.createMessage();
        this.form.reset();
        this.isLoading = false;
        this.$cd.markForCheck();
      });
  }
}
