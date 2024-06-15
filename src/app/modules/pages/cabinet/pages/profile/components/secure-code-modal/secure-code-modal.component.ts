import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { InputsFormComponent } from './inputs-form/inputs-form.component';

@Component({
  selector: 'app-secure-code-modal',
  templateUrl: './secure-code-modal.component.html',
  styleUrls: ['./secure-code-modal.component.css'],
  standalone: true,
  imports: [NzModalModule, NgFor, TranslateModule, FormsModule, ReactiveFormsModule, NzFormModule, NzInputModule, NzButtonModule, InputsFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecureCodeModalComponent {
  @Input()
  form!: UntypedFormGroup

  @Input()
  isLoading!: boolean

  @Input()
  confirmationCodeLength!: number

  @Input()
  isVisible!: boolean

  @Output()
  isVisibleChange = new EventEmitter<boolean>()

  @Output()
  confirmSecureCode = new EventEmitter()

  /**
   */
  private $cd = inject(ChangeDetectorRef)


  /**
   * 
   */
  handleCancel() {
    this.isVisible = false
    this.$cd.markForCheck()
  }

  /**
   * 
   */
  handleOk() {
    this.isVisible = false
    this.$cd.markForCheck()
  }
}
