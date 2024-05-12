import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less'],
  standalone: true,
  imports: [NzCarouselModule, NgFor]
})
export class CarouselComponent {
  array = [1, 2, 3, 4];
  effect = 'scrollx';
}
