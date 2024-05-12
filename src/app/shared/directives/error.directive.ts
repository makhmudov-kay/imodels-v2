import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Directive({
  selector: '[appError]',
  standalone: true,
})
export class ErrorDirective implements AfterViewInit {
  /**
   *
   */
  constructor(
    private control: NgControl,
    private elementRef: ElementRef,
    private $translate: TranslateService
  ) {}

  /**
   *
   */
  ngAfterViewInit() {
    this.control.valueChanges?.subscribe((res) => {
      if (this.control.dirty) {
        const el = this.elementRef.nativeElement as HTMLElement;
        if (this.control.invalid) {
          el.classList.add('error');

          const span = document.createElement('span');
          let errorText = 'unknownError';
          if (this.control.hasError('required')) {
            errorText = 'requiredField';
          } else if (this.control.hasError('mask')) {
            errorText = 'mask.' + this.control.getError('mask').requiredMask;
          }
          span.textContent = this.$translate.instant(errorText);
          // any other styling
          if (el.nextSibling) el.parentNode?.removeChild(el.nextSibling);
          el.parentNode?.insertBefore(span, el.nextSibling);
        } else {
          el.classList.remove('error');
          if (el.nextSibling) el.parentNode?.removeChild(el.nextSibling);
        }
      }
    });
  }
}
