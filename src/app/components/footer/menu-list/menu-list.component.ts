import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
  standalone: true,
  imports: [NgFor, TranslateModule, RouterLink]
})
export class MenuListComponent {
  @Input()
  list!: any[]
}
