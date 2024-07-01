import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.less'],
  standalone: true,
  imports: [TranslateModule],
})
export class FeaturesComponent {
  @Input()
  data!: any;
}
