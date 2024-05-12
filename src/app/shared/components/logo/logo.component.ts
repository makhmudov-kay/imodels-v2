import { Component, OnInit } from '@angular/core';
import { SvgLogoComponent } from '../../svg/svg-logo/svg-logo.component';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
  standalone: true,
  imports: [SvgLogoComponent]
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
