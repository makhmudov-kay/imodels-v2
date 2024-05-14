import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg-phone',
  templateUrl: './svg-phone.component.html',
  standalone: true,
})
export class SvgPhoneComponent {
  @Input()
  color = 'white';
}
