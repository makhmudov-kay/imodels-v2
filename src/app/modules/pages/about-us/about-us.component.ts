import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { TimelineCardComponent } from './components/timeline-card/timeline-card.component';
import { MISSION_DATA, STORY_DATA } from './story-data';
import { NgFor, NgIf } from '@angular/common';
import { MissionCardComponent } from './components/mission-card/mission-card.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { AboutSectionComponent } from '../home/components/about-section/about-section.component';
import { OurTeamComponent } from './components/our-team/our-team.component';

export interface StoryData {
  date: string;
  title: string;
  fade?: boolean;
}

export interface MissionData {
  title: string;
  text: string
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.less'],
  standalone: true,
  imports: [TranslateModule, NzTimelineModule, TimelineCardComponent, NgIf, NgFor, MissionCardComponent, NzDividerModule, AboutSectionComponent, OurTeamComponent]
})
export class AboutUsComponent implements OnInit {
  /**
   */
  isMobileSize = false
  stories: StoryData[] = STORY_DATA;
  mission: MissionData[] = MISSION_DATA;

  /**
   * 
   */
  ngOnInit() {
    this.checkMobileSize()
  }

  /**
  *
  */
  private checkMobileSize() {
    this.isMobileSize = window.innerWidth < 767;
  }

  /**
   *
   * @param e
   */
  @HostListener('window:resize')
  onResize(e: any) {
    this.checkMobileSize();
  }
}
