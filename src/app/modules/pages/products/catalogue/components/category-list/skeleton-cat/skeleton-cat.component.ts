import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'app-skeleton-cat',
  templateUrl: './skeleton-cat.component.html',
  styleUrls: ['./skeleton-cat.component.less'],
  standalone: true,
  imports: [NzSkeletonModule, NgStyle],
})
export class SkeletonCatComponent {
  @Input()
  width: string = '200px';
}
