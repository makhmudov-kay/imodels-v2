import { Component, OnInit } from '@angular/core';
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
export class CalcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
