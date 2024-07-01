import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.less'],
  standalone: true,
  imports: [NgFor, TranslateModule],
})
export class NetworkComponent {
  @Input()
  data!: any;
}
