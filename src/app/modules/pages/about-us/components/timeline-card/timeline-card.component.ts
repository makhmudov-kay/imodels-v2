import { Component, Input } from '@angular/core';
import { StoryData } from '../../about-us.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.css'],
  standalone: true,
  imports: [TranslateModule]
})
export class TimelineCardComponent {
  @Input()
  story!: StoryData
}
