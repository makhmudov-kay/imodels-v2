import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-info-blocks',
  templateUrl: './info-blocks.component.html',
  styleUrls: ['./info-blocks.component.css'],
  standalone: true,
  imports: [NgFor, TranslateModule],
})
export class InfoBlocksComponent {
  @Input()
  data!: any;
}
