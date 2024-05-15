import { Component, OnInit } from '@angular/core';
import { SectionTitleComponent } from 'src/app/shared/components/section-title/section-title.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
  standalone: true,
  imports: [SectionTitleComponent, CategoryListComponent],
})
export class CatalogueComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
