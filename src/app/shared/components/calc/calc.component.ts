import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SvgMinusComponent } from '../../svg/svg-minus/svg-minus.component';
import { SvgPlusComponent } from '../../svg/svg-plus/svg-plus.component';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
  standalone: true,
  imports: [
    SvgMinusComponent, SvgPlusComponent,
  ]
})
export class CalcComponent {
  /**
   */
  @Input()
  count!: number | undefined;
  /**
   */
  @Input()
  mainItem!: boolean;
  /**
   */
  @Output()
  countChangeDecrease = new EventEmitter();
  /**
   */
  @Output()
  countChangeIncrease = new EventEmitter();
  /**
   * 
   */
  decrease() {
    this.countChangeDecrease.emit();
  }
  /**
   * 
   */
  increase() {
    this.countChangeIncrease.emit();
  }

}
