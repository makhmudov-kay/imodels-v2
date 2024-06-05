import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-cabinet-menu',
  templateUrl: './cabinet-menu.component.html',
  styleUrls: ['./cabinet-menu.component.css'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive]
})
export class CabinetMenuComponent implements OnInit {
  private $auth = inject(AuthService)
  private router = inject(Router)

  constructor() { }

  ngOnInit() {
  }

  logout() {
    this.$auth.logout();
    this.router.navigate(['./auth/sign-up']);
  }
}
