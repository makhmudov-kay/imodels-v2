import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { markAsDirty } from 'src/app/utils/utilits';
import { SvgPhoneComponent } from 'src/app/shared/svg/svg-phone/svg-phone.component';
import { SvgLockComponent } from 'src/app/shared/svg/svg-lock/svg-lock.component';
import { SvgEyeComponent } from 'src/app/shared/svg/svg-eye/svg-eye.component';
import { SvgEyeSlashComponent } from 'src/app/shared/svg/svg-eye-slash/svg-eye-slash.component';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMaskDirective } from 'ngx-mask';
import { Constants } from 'src/app/core/configs/constants';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NgDestroy } from 'src/app/core/services/ng-destroy.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less'],
  standalone: true,
  imports: [FormsModule, NzFormModule, NzInputModule, NzButtonModule, ReactiveFormsModule, SvgPhoneComponent, SvgLockComponent, SvgEyeComponent, SvgEyeSlashComponent, NgIf, TranslateModule, RouterLink, NgxMaskDirective, NzAlertModule, NgSwitch, NgSwitchCase],
  providers: [NgDestroy],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit {
  /**
   */
  form!: UntypedFormGroup
  /**
  * 1 - неверный логин или пароль
  * 2 - номер телефона занят
  */
  errorType!: number;
  passwordVisible = false
  isLoading = false

  /**
   */
  private fb = inject(FormBuilder)
  private $auth = inject(AuthService)
  private $cd = inject(ChangeDetectorRef)
  private router = inject(Router)
  private $destroy = inject(NgDestroy)


  /**
   */
  PHONE_PREFIX = Constants.PHONE_PREFIX;

  /**
   * 
   */
  ngOnInit() {
    this.initForm()
  }

  /**
   * 
   */
  initForm() {
    this.form = this.fb.group({
      phone: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  /**
   * 
   */
  login() {
    if (this.form.invalid) {
      markAsDirty(this.form);
      return;
    }
    this.isLoading = true
    const request = this.form.getRawValue();
    request.phone = '998' + request.phone;
    this.$auth.auth(request).pipe(takeUntil(this.$destroy)).subscribe({
      next: (e) => {
        this.form.reset();
        if (e.access) {
          this.isLoading = false
          this.$cd.markForCheck()
          this.router.navigate(['../cabinet']);
        }
      },
      error: (err) => {
        if (err?.error.detail) {
          this.errorType = 1;
        }
        this.isLoading = false
        this.$cd.markForCheck();
      },
    });
  }
}
