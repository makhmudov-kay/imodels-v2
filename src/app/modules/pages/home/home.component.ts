import { Component } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SectionsComponent } from './components/sections/sections.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { NewsComponent } from './components/news/news.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ContactsBlockComponent } from './components/contacts-block/contacts-block.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CarouselComponent,
    SectionsComponent,
    AboutSectionComponent,
    NewsComponent,
    PartnersComponent,
    ContactsBlockComponent,
  ],
})
export class HomeComponent {}
