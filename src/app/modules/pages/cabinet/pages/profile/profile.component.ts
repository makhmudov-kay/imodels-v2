import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CabinetService } from '../../services/cabinet.service';
import { UserDetail } from '../../../auth/model/user.model';
import { Observable, map, takeUntil, tap } from 'rxjs';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { markAsDirty } from 'src/app/utils/utilits';
import { NgDestroy } from 'src/app/core/services/ng-destroy.service';
import { SecureCodeModalComponent } from './components/secure-code-modal/secure-code-modal.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [SecureCodeModalComponent, TranslateModule, NgIf, AsyncPipe, NzTypographyModule, NzModalModule, FormsModule, ReactiveFormsModule, NzInputModule, NzFormModule, NzButtonModule, NgFor, NgIf, NzSkeletonModule],
  providers: [NgDestroy],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  /**
   *
   */
  $userDetail = inject(CabinetService);
  private $cd = inject(ChangeDetectorRef)
  private fb = inject(FormBuilder);
  private $destroy = inject(NgDestroy);
  private $message = inject(NzMessageService);
  private $translate = inject(TranslateService);

  /**
   *
   */
  userDetail$!: Observable<UserDetail>;
  first_name!: string;
  last_name!: string;
  phone!: string
  isVisible = false
  form!: UntypedFormGroup;
  confirmationCodeLength = 6;
  isLoading = false;

  /**
   *
   */
  ngOnInit(): void {
    this.getUserDetail();
    this.initForm()
  }

  /**
   * 
   */
  private changeDataMessage() {
    this.$message.success(this.$translate.instant('dataSuccessChanged'));
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
   */
  private getUserDetail() {
    this.userDetail$ = this.$userDetail
      .getUserInfo()
      .pipe(map((result) => result), tap((result) => {
        this.first_name = result.first_name;
        this.last_name = result.last_name;
        this.phone = result.phone
        this.$cd.markForCheck()
      }));
  }

  /**
   * 
   * @param value 
   * @param type 
   */
  updateProfile(value: string, type: 1 | 2 | 3) {
    switch (type) {
      case 1:
        this.first_name = value
        const first_name = { first_name: value }
        this.editProfile(first_name)
        break
      case 2:
        this.last_name = value
        const last_name = { last_name: value }
        this.editProfile(last_name)
        break
      case 3:
        this.phone = value
        const phone = { phone: value }
        this.editProfile(phone, 'phone')
        break
    }
  }

  /**
   * 
   * @param request 
   */
  editProfile(request: any, type?: 'phone') {
    this.$userDetail.editSingleFields(request).pipe(takeUntil(this.$destroy)).subscribe((res) => {
      if (type === 'phone') {
        this.isVisible = true
        this.$cd.markForCheck()
        return
      }
      this.changeDataMessage()
      this.$cd.markForCheck()
    })
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
   * @returns
   */
  confirmSecureCode() {
    if (this.form.invalid) {
      markAsDirty(this.form);
      return;
    }
    this.isLoading = true;
    const request = {
      secure_code: this.getActivationCode()
    };

    this.$userDetail.confirmEditProfile(request).pipe(takeUntil(this.$destroy)).subscribe(() => {
      this.isLoading = false;
      this.isVisible = false
      this.changeDataMessage();
      this.getUserDetail()
      this.$cd.markForCheck();
    })
  }
}
