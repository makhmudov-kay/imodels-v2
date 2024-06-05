import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabinetMenuComponent } from './components/cabinet-menu/cabinet-menu.component';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css'],
  standalone: true,
  imports: [RouterOutlet, CabinetMenuComponent]
})
export class CabinetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
