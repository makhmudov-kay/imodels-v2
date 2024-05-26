import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg-cart',
  templateUrl: './svg-cart.component.html',
  standalone: true
})
export class SvgCartComponent {
  @Input()
  color = '#38b6c2';
}
