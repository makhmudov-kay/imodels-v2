import { Component, inject } from '@angular/core';
import { SvgLogoComponent } from '../../svg/svg-logo/svg-logo.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
  standalone: true,
  imports: [SvgLogoComponent]
})
export class LogoComponent {
  /**
   */
  private router = inject(Router)

  /**
   * 
   */
  navigateToHome() {
    this.router.navigate(['']);
  }
}
