import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { TimelineCardComponent } from './components/timeline-card/timeline-card.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  standalone: true,
  imports: [TranslateModule, NzTimelineModule, TimelineCardComponent]
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
