import { NgClass, NgFor } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SectionMainTitleComponent } from 'src/app/shared/components/section-title/section-title/section-title.component';
import { SwiperComponent, SwiperModule, } from 'swiper/angular';
import { TEAM_CARD } from './team-info';
import Swiper from 'swiper';

export interface Team {
  title: string;
  img: string;
  text: string;
}

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css'],
  standalone: true,
  imports: [SwiperModule, NgFor, TranslateModule, SectionMainTitleComponent, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurTeamComponent implements AfterViewInit {
  ourTeam = TEAM_CARD
  @ViewChild('swiper', { static: false }) swiper!: SwiperComponent;
  activeSlide = 0

  private cd = inject(ChangeDetectorRef)

  ngAfterViewInit() {
    this.changeSlide();
  }

  changeSlide() {
    this.activeSlide = this.swiper.swiperRef.realIndex;
    this.cd.markForCheck()
  }
}
