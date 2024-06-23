import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
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
    NgIf
  ],
})
export class AboutSectionComponent {
  @Input()
  isAboutPage!: boolean

  @Input()
  title = 'aboutUs'

  @Input()
  text = 'aboutUsText'

  @Input()
  img = './assets/image/about-section.jpg'
}
