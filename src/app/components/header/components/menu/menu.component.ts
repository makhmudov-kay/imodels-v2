import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SvgDownComponent } from 'src/app/shared/svg/svg-down/svg-down.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  standalone: true,
  imports: [
    NzMenuModule,
    SvgDownComponent,
    TranslateModule,
    RouterLink,
    RouterLinkActive,
    NgIf,
    NgFor,
    NgClass,
    NzDividerModule,
    NgClass,
  ],
})
export class MenuComponent {
  /**
   */
  @Input()
  isDrawer!: boolean;

  /**
   *
   */
  @Output()
  closeDrawerMenu = new EventEmitter();

  /**
   */
  menuItems = [
    {
      label: 'allProducts',
      routerLink: '../products',
      queryParams: { page: 1, category_id: 0 },
      isHeader: true,
    },
    {
      label: 'individualsProducts',
      routerLink: '../products/individuals',
      queryParams: null,
      isHeader: true,
    },
    {
      label: 'advance',
      routerLink: '../products/list',
      queryParams: { page: 1, category_id: '2' },
      isHeader: false,
    },
    {
      label: 'aspire',
      routerLink: '../products/list',
      queryParams: { page: 1, category_id: '9' },
      isHeader: false,
    },
    {
      label: 'adept',
      routerLink: '../products/list',
      queryParams: { page: 1, category_id: '7' },
      isHeader: false,
    },
    {
      label: 'professionals',
      routerLink: '../products/professionals',
      queryParams: null,
      isHeader: true,
    },
    {
      label: 'apexPro',
      routerLink: '../products/apex-pro',
      queryParams: null,
      isHeader: false,
    },
    {
      label: 'apexVr',
      routerLink: '../products/apex-vr',
      queryParams: null,
      isHeader: false,
    },
    {
      label: 'analytic',
      routerLink: '../products/analytic',
      queryParams: null,
      isHeader: false,
    },
    {
      label: 'advanceTraining',
      routerLink: '../products/advance-training-station',
      queryParams: null,
      isHeader: false,
    },
    {
      label: 'advancePortable',
      routerLink: '../products/advance-portable',
      queryParams: null,
      isHeader: false,
    },
    {
      label: 'other',
      routerLink: '../products/list',
      queryParams: { page: 1, category_id: '3' },
      isHeader: true,
    },
    {
      label: 'urology',
      routerLink: '../products/list',
      queryParams: { page: 1, category_id: '10' },
      isHeader: false,
    },
    {
      label: 'laparoscopic',
      routerLink: '../products/list',
      queryParams: { page: 1, category_id: '5' },
      isHeader: false,
    },
    {
      label: 'training',
      routerLink: '../products/list',
      queryParams: { page: 1, category_id: '6' },
      isHeader: false,
    },
    {
      label: 'examSets',
      routerLink: '../products/list',
      queryParams: { page: 1, category_id: '13' },
      isHeader: false,
    },
    {
      label: 'accesories',
      routerLink: '../products/list',
      queryParams: { page: 1, category_id: '4' },
      isHeader: false,
    },
  ];
}
