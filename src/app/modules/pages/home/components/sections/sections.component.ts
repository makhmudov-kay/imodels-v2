import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SectionCardComponent } from './section-card/section-card.component';
import { PRODUCTS_BLOCK } from './products-block';
import { ProductsBlock } from './products-block.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css'],
  standalone: true,
  imports: [TranslateModule, SectionCardComponent, NgFor],
})
export class SectionsComponent {
  /**
   *
   */
  productsBlockInfo: ProductsBlock[] = PRODUCTS_BLOCK;
}
