import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg-right',
  templateUrl: './svg-right.component.html',
  standalone: true,
})
export class SvgRightComponent {
  @Input()
  color = '#fff';

  @Input()
  width = '25';

  @Input()
  height = '24';
}
