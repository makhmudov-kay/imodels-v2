import { NgFor } from '@angular/common';
import { Component, ElementRef, Input, OnInit, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-inputs-form',
  templateUrl: './inputs-form.component.html',
  styleUrls: ['./inputs-form.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NzInputModule, NzFormModule, NgFor]
})
export class InputsFormComponent {
  /**
   */
  @Input()
  form!: UntypedFormGroup

  @Input()
  confirmationCodeLength!: number

  /**
   */
  private elementRef = inject(ElementRef);

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
}
