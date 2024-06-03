import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgxMaskDirective } from 'ngx-mask';
import { Constants } from 'src/app/core/configs/constants';
import { SvgPhoneComponent } from 'src/app/shared/svg/svg-phone/svg-phone.component';
import { AuthService } from '../services/auth.service';
import { NgDestroy } from 'src/app/core/services/ng-destroy.service';
import { takeUntil } from 'rxjs';
import { markAsDirty } from 'src/app/utils/utilits';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NzFormModule, NzInputModule, NgxMaskDirective, SvgPhoneComponent, TranslateModule, NzButtonModule, RouterLink, NgIf],
  providers: [NgDestroy],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordComponent implements OnInit {
  /**
   */
  form!: UntypedFormGroup
  phoneNotFound = false;
  PHONE_PREFIX = Constants.PHONE_PREFIX;

  /**
   */
  private fb = inject(FormBuilder)
  private $auth = inject(AuthService)
  private $destroy = inject(NgDestroy)
  private $cd = inject(ChangeDetectorRef)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  /**
   * 
   */
  ngOnInit() {
    this.initForm();
  }

  /**
   * 
   */
  initForm() {
    this.form = this.fb.group({
      phone: ['', [Validators.required]],
    });

    this.form.controls['phone'].valueChanges.subscribe(() => {
      if (this.phoneNotFound) {
        this.phoneNotFound = false;
      }
    });
  }

  /**
   * 
   * @returns 
   */
  sendPhone() {
    if (this.form.invalid) {
      markAsDirty(this.form);
      return;
    }

    const request = this.form.getRawValue();
    request.phone = '998' + request.phone;

    this.$auth
      .resetPassword(request)
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (res) => {
          this.router.navigate(['../secure-code'], {
            queryParams: { phone: request.phone },
            relativeTo: this.route
          });
        },
        error: (err) => {
          this.phoneNotFound = true;
          this.$cd.markForCheck()
        },
      });
  }
}
