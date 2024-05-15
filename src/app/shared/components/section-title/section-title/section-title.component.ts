import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-main-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.css'],
  standalone: true,
  imports: [NgClass],
})
export class SectionMainTitleComponent {
  @Input()
  center!: boolean;
}
