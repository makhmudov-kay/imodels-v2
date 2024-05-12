import { Component, OnInit } from '@angular/core';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { ActionsMenuComponent } from './components/actions-menu/actions-menu.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [LogoComponent, MenuComponent, ActionsMenuComponent]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
