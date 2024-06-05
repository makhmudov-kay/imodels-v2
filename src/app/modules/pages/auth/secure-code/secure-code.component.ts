import { ActivatedRoute, Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { markAsDirty } from 'src/app/utils/utilits';
import { AuthService } from '../services/auth.service';
import { finalize, takeUntil, tap } from 'rxjs';
import { NgDestroy } from 'src/app/core/services/ng-destroy.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-secure-code',
  templateUrl: './secure-code.component.html',
  styleUrls: ['./secure-code.component.less'],
  standalone: true,
  imports: [
    TranslateModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NgFor,
    NgIf,
  ],
  providers: [NgDestroy],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecureCodeComponent implements OnInit {
  /**
   *
   */
  form!: UntypedFormGroup;
  confirmationCodeLength = 6;
  phone!: string;
  timer = 60;
  isLoading = false;
  type!: string;

  /**
   *
   */
  private fb = inject(FormBuilder);
  private elementRef = inject(ElementRef);
  private $cd = inject(ChangeDetectorRef);
  private $auth = inject(AuthService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private $destroy = inject(NgDestroy);
  private $notification = inject(NzNotificationService);
  private $translate = inject(TranslateService);

  /**
   *
   */
  ngOnInit() {
    this.initForm();
    this.phone = this.route.snapshot.queryParams['phone'];
    this.type = this.route.snapshot.queryParams['type'];
    this.$cd.markForCheck();
    this.startTimer();
  }

  /**
   *
   */
  private initForm() {
    this.form = this.fb.group({});
    for (let index = 0; index < this.confirmationCodeLength; index++) {
      this.form.addControl(
        `activationCode${index}`,
        new FormControl(null, Validators.required)
      );
    }
  }

  /**
   *
   * @returns
   */
  public getActivationCode() {
    let activationCode = '';
    for (const key in this.form.value) {
      activationCode += this.form.value[key];
    }
    return activationCode;
  }

  /**
   *
   * @param index
   */
  setFocus(index: number): void {
    const control = this.form.controls[`activationCode${index}`];
    if (control?.value) {
      const elem = this.elementRef.nativeElement.querySelector(
        `input[id=activationCode${index + 1}]`
      );
      if (elem) {
        elem.focus();
      }
    }
  }

  /**
   *
   * @param index
   */
  backspace(index: number): void {
    if (index > 0) {
      const inputClickedBackspase = this.elementRef.nativeElement.querySelector(
        `input[id=activationCode${index}]`
      );
      if (!inputClickedBackspase?.value) {
        const elemenForFocus = this.elementRef.nativeElement.querySelector(
          `input[id=activationCode${index - 1}]`
        );
        if (elemenForFocus) {
          elemenForFocus.focus();
        }
      }
    }
  }

  /**
   *
   */
  startTimer() {
    let timerInterval = setInterval(() => {
      --this.timer;
      this.$cd.markForCheck();
      if (this.timer === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }

  /**
   *
   * @returns
   */
  confirmSecureCode() {
    if (this.form.invalid) {
      markAsDirty(this.form);
      return;
    }
    this.isLoading = true;
    const request = {
      secure_code: this.getActivationCode(),
      phone: this.phone,
    };

    if (this.type == '1') {
      this.confirmRegister(request);
      return;
    }
    this.confirmResetPassword(request);
  }

  /**
   *
   * @param request
   */
  private confirmResetPassword(request: {
    secure_code: string;
    phone: string;
  }) {
    this.$auth
      .confirmResetPassword(request)
      .pipe(
        takeUntil(this.$destroy),
        finalize(() => {
          this.isLoading = false;
          this.$cd.markForCheck();
        })
      )
      .subscribe((res) => {
        if (res.token) {
          this.form.reset();
          this.router.navigate(['../confirm'], {
            queryParams: { token: res.token, phone: request.phone },
            relativeTo: this.route,
          });
        }
      });
  }

  /**
   *
   * @param request
   */
  private confirmRegister(request: { secure_code: string; phone: string }) {
    this.$auth.confirm(request).pipe(takeUntil(this.$destroy)).subscribe((e: any) => {
      if (e.detail === 'User activated') {
        this.form.reset();
        this.$notification.success(
          this.$translate.instant('notification'),
          this.$translate.instant('successAuth')
        );
        this.router.navigate(['../sign-up'], {
          relativeTo: this.route,
        });
      }
    });
  }

  /**
   *
   */
  resendSecureCode() {
    const request = {
      phone: this.phone,
    };
    this.$auth
      .resendCode(request)
      .pipe(takeUntil(this.$destroy))
      .subscribe((res) => {
        this.timer = 60;
        this.startTimer();
        this.$cd.markForCheck();
      });
  }
}
