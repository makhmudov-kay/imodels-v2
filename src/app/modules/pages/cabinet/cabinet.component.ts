import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css'],
  standalone: true,
  imports: [RouterOutlet]
})
export class CabinetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
