import { Component } from '@angular/core';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'app-skeleton-cat',
  templateUrl: './skeleton-cat.component.html',
  styleUrls: ['./skeleton-cat.component.less'],
  standalone: true,
  imports: [NzSkeletonModule],
})
export class SkeletonCatComponent {}
