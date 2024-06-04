import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SvgEyeSlashComponent } from 'src/app/shared/svg/svg-eye-slash/svg-eye-slash.component';
import { SvgEyeComponent } from 'src/app/shared/svg/svg-eye/svg-eye.component';
import { SvgLockComponent } from 'src/app/shared/svg/svg-lock/svg-lock.component';
import { AuthService } from '../services/auth.service';
import { finalize, takeUntil } from 'rxjs';
import { NgDestroy } from 'src/app/core/services/ng-destroy.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.less'],
  standalone: true,
  imports: [
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NgIf,
    NzInputModule,
    SvgEyeComponent,
    SvgLockComponent,
    SvgEyeSlashComponent,
    NzButtonModule,
    RouterLink,
  ],
  providers: [NgDestroy],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmPasswordComponent implements OnInit {
  form!: FormGroup<{
    password: FormControl<string | null>;
    checkPassword: FormControl<string | null>;
  }>;
  passwordVisible = false;
  confirmPasswordVisible = false;
  isLoading = false;
  token!: string;

  /**
   *
   * @param control
   * @returns
   */
  confirmationValidator: ValidatorFn = (
    control: AbstractControl
  ): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.form.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  /**
   *
   */
  private fb = inject(FormBuilder);
  private $auth = inject(AuthService);
  private $destroy = inject(NgDestroy);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private $notification = inject(NzNotificationService);
  private $translate = inject(TranslateService);
  private $cd = inject(ChangeDetectorRef);

  /**
   *
   */
  ngOnInit() {
    this.form = this.fb.group({
      password: ['', [Validators.required]],
      checkPassword: ['', [Validators.required, this.confirmationValidator]],
    });

    this.token = this.route.snapshot.queryParamMap.get('token') ?? '';
  }

  /**
   *
   */
  updateConfirmValidator(): void {
    Promise.resolve().then(() =>
      this.form.controls.checkPassword.updateValueAndValidity()
    );
  }

  /**
   *
   * @returns
   */
  createNewPassword() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    const request = this.form.getRawValue();
    const [encoded_pk, token] = this.token.split('/');

    this.$auth
      .setNewPassword(encoded_pk, token, { password: request.password ?? '' })
      .pipe(
        takeUntil(this.$destroy),
        finalize(() => {
          this.isLoading = false;
          this.$cd.markForCheck();
        })
      )
      .subscribe((res: any) => {
        if (res.detail) {
          this.$notification.success(
            this.$translate.instant('notification'),
            this.$translate.instant('passwordRestSuccess')
          );
        }
        this.router.navigate(['../sign-up'], { relativeTo: this.route });
      });
  }
}
