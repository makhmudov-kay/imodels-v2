import { DatePipe, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SvgEyeComponent } from 'src/app/shared/svg/svg-eye/svg-eye.component';
import { Blog } from '../../models/blog.model';
import { MyTranslateSyncPipe } from 'src/app/shared/pipes/my-translate-sync.pipe';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css'],
  standalone: true,
  imports: [
    SvgEyeComponent,
    NgClass,
    MyTranslateSyncPipe,
    DatePipe,
    NzButtonModule,
    TranslateModule,
    RouterLink,
    NzTypographyModule
  ],
})
export class BlogCardComponent {
  @Input()
  isFirst!: boolean;

  @Input()
  isBlogList = false;

  @Input()
  isSmCard = false;

  @Input()
  formHome = false;

  @Input()
  data: Blog = {
    id: 0,
    created_at: new Date(),
    preview_image: './assets/image/blog-1.jpg',
    title: {
      ru: 'Esophageal Atresia – Physical Mo...',
      uz: 'Esophageal Atresia – Physical Mo...',
      en: 'Esophageal Atresia – Physical Mo...',
    },
    description: {
      ru: 'Esophageal Atresia – Physical Mo...',
      uz: 'Esophageal Atresia – Physical Mo...',
      en: 'Esophageal Atresia – Physical Mo...',
    },
  };
}
