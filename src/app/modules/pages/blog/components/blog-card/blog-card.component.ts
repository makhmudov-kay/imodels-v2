import { Component } from '@angular/core';
import { SvgEyeComponent } from 'src/app/shared/svg/svg-eye/svg-eye.component';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css'],
  standalone: true,
  imports: [SvgEyeComponent]
})
export class BlogCardComponent {}
