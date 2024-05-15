import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-text',
  templateUrl: './section-text.component.html',
  styleUrls: ['./section-text.component.css'],
  standalone: true,
  imports: [NgClass],
})
export class SectionTextComponent {
  @Input()
  center!: boolean;
}
