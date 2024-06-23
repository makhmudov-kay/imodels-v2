import { NgClass, NgFor } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SectionMainTitleComponent } from 'src/app/shared/components/section-title/section-title/section-title.component';
import { SwiperComponent, SwiperModule, } from 'swiper/angular';
import { TEAM_CARD } from './team-info';

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
  imports: [SwiperModule, NgFor, TranslateModule, SectionMainTitleComponent, NgClass]
})
export class OurTeamComponent implements OnInit, AfterViewInit {
  ourTeam = TEAM_CARD

  @ViewChild('swiper')
  swiper!: SwiperComponent;

  activeSlide = 0

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.activeSlide = this.swiper.swiperRef.activeIndex
  }

}
