import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg-user',
  templateUrl: './svg-user.component.html',
  standalone: true,
})
export class SvgUserComponent {
  @Input()
  width = 24;

  @Input()
  height = 24;

  @Input()
  color = '#38B6C2';
}
