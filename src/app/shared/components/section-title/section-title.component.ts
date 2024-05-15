import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SectionTextComponent } from './section-text/section-text.component';
import { SectionMainTitleComponent } from './section-title/section-title.component';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.css'],
  standalone: true,
  imports: [
    TranslateModule,
    NgClass,
    NgIf,
    SectionTextComponent,
    SectionMainTitleComponent,
  ],
})
export class SectionTitleComponent {
  /**
   *
   */
  @Input()
  section!: string;

  /**
   *
   */
  @Input()
  title!: string;

  /**
   *
   */
  @Input()
  center!: boolean;
}
