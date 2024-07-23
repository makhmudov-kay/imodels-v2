import { Component, inject, OnInit } from '@angular/core';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { SvgTelegramComponent } from 'src/app/shared/svg/svg-telegram/svg-telegram.component';
import { SvgInstagramComponent } from 'src/app/shared/svg/svg-instagram/svg-instagram.component';
import { SvgYoutubeComponent } from 'src/app/shared/svg/svg-youtube/svg-youtube.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
  standalone: true,
  imports: [
    LogoComponent,
    MenuListComponent,
    SvgTelegramComponent,
    SvgInstagramComponent,
    SvgYoutubeComponent,
    RouterLink,
  ],
})
export class FooterComponent implements OnInit {
  private router = inject(Router);
  paddingBottom!: number;

  ngOnInit() {    
    // this.paddingBottom = this.route.snapshot.data['paddingBottom'] || 0;
  }

  menuItems = [
    { label: 'apexVr', routerLink: '../products/apex-vr', queryParams: null },
    {
      label: 'analytic',
      routerLink: '../products/analytic',
      queryParams: null,
    },
    {
      label: 'advanceTraining',
      routerLink: '../products/advance-training-station',
      queryParams: null,
    },
    {
      label: 'advancePortable',
      routerLink: '../products/advance-portable',
      queryParams: null,
    },
    {
      label: 'aspire',
      routerLink: '../products/list',
      queryParams: { category_id: '9' },
    },
    {
      label: 'advance',
      routerLink: '../products/list',
      queryParams: { category_id: '2' },
    },
    {
      label: 'adept',
      routerLink: '../products/list',
      queryParams: { category_id: '7' },
    },
  ];
  links = [
    { label: 'whoAreWe', routerLink: '../about-us', queryParams: null },
    { label: 'contact.contact', routerLink: '../contacts', queryParams: null },
  ];
}
