import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-banner',
  templateUrl: './contact-banner.component.html',
  styleUrls: ['./contact-banner.component.css'],
  standalone: true,
  imports: [NgClass],
})
export class ContactBannerComponent {
  @Input()
  height = false;
}
