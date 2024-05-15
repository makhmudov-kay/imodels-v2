import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SvgMedPlusComponent } from 'src/app/shared/svg/svg-med-plus/svg-med-plus.component';
import { SvgRightComponent } from 'src/app/shared/svg/svg-right/svg-right.component';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css'],
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink,
    SvgRightComponent,
    SvgMedPlusComponent,
  ],
})
export class AboutSectionComponent {}
