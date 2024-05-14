import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg-circle-arrow',
  templateUrl: './svg-circle-arrow.component.html',
  standalone: true,
})
export class SvgCircleArrowComponent {
  @Input()
  color = 'white';
}
