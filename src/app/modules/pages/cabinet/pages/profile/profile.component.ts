import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CabinetService } from '../../services/cabinet.service';
import { UserDetail } from '../../../auth/model/user.model';
import { Observable, map, tap } from 'rxjs';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { markAsDirty } from 'src/app/utils/utilits';
import { NgDestroy } from 'src/app/core/services/ng-destroy.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [TranslateModule, NgIf, AsyncPipe, NzTypographyModule, NzModalModule, FormsModule, ReactiveFormsModule, NzInputModule, NzFormModule, NzButtonModule, NgFor, NgIf],
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
  private elementRef = inject(ElementRef);
  private $destroy = inject(NgDestroy);

  /**
   *
   */
  userDetail$!: Observable<UserDetail>;
  first_name!: string;
  last_name!: string;
  phone!: string
  isVisible = true

  form!: UntypedFormGroup;
  confirmationCodeLength = 6;
  timer = 60;
  isLoading = false;
  type!: string;

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
        this.editProfile(phone)
        break
    }
  }

  /**
   * 
   * @param request 
   */
  editProfile(request: any) {
    this.$userDetail.editSingleFields(request).subscribe((res) => {
      console.log(res);
    })
  }

  /**
   * 
   */
  handleCancel() {
    this.isVisible = false
    this.$cd.markForCheck()
  }

  handleOk() {
    this.isVisible = false
    this.$cd.markForCheck()
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
      console.log(this.elementRef.nativeElement);
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
      console.log(index);
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
      secure_code: this.getActivationCode()
    };
  }

  /**
   *
   * @param request
   */
  private confirmResetPassword(request: {
    secure_code: string;
    phone: string;
  }) {

  }

  /**
   *
   * @param request
   */
  private confirmRegister(request: { secure_code: string; phone: string }) {

  }
}
