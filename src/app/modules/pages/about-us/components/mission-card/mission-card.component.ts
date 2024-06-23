import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MissionData } from '../../about-us.component';

@Component({
  selector: 'app-mission-card',
  templateUrl: './mission-card.component.html',
  styleUrls: ['./mission-card.component.css'],
  standalone: true,
  imports: [TranslateModule]
})
export class MissionCardComponent {
  @Input()
  card!: MissionData
}
