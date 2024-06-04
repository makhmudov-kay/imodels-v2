import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgxMaskDirective } from 'ngx-mask';
import { Constants } from 'src/app/core/configs/constants';
import { SvgEyeSlashComponent } from 'src/app/shared/svg/svg-eye-slash/svg-eye-slash.component';
import { SvgEyeComponent } from 'src/app/shared/svg/svg-eye/svg-eye.component';
import { SvgLockComponent } from 'src/app/shared/svg/svg-lock/svg-lock.component';
import { SvgPhoneComponent } from 'src/app/shared/svg/svg-phone/svg-phone.component';
import { markAsDirty } from 'src/app/utils/utilits';
import { AuthService } from '../services/auth.service';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { SvgUserComponent } from 'src/app/shared/svg/svg-user/svg-user.component';
import { NgDestroy } from 'src/app/core/services/ng-destroy.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NgxMaskDirective,
    NzButtonModule,
    SvgEyeComponent,
    SvgEyeSlashComponent,
    SvgLockComponent,
    SvgPhoneComponent,
    TranslateModule,
    NgIf,
    RouterLink,
    NgSwitch,
    NgSwitchCase,
    NzAlertModule,
    SvgUserComponent,
  ],
  providers: [NgDestroy],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
  /**
   *
   */
  passwordVisible = false;
  isLoading = false;
  PHONE_PREFIX = Constants.PHONE_PREFIX;
  form!: FormGroup<{
    phone: FormControl<string | null>;
    password: FormControl<string | null>;
    first_name: FormControl<string | null>;
    last_name: FormControl<string | null>;
  }>;
  errorType!: number;

  /**
   *
   */
  private fb = inject(FormBuilder);
  private $auth = inject(AuthService);
  private $cd = inject(ChangeDetectorRef);
  private $destroy = inject(NgDestroy);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  /**
   *
   */
  ngOnInit() {
    this.registrationFormInit();
  }

  /**
   *
   */
  private registrationFormInit() {
    this.form = this.fb.group({
      phone: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
    });
  }

  /**
   *
   * @returns
   */
  register() {
    if (this.form.invalid) {
      markAsDirty(this.form);
      return;
    }
    const request = this.form.getRawValue();
    request.phone = '998' + request.phone;
    this.form.controls['phone'].setValue(request.phone);

    this.$auth
      .registration(request)
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (e: any) => {
          if (e.id) {
            this.form.reset();
            this.router.navigate(['../secure-code'], {
              queryParams: { type: 1, phone: request.phone },
              relativeTo: this.route,
            });
          }
        },
        error: () => {
          this.errorType = 2;
          this.$cd.markForCheck();
        },
      });
  }
}
