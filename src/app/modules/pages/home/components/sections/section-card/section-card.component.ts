import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SvgRightComponent } from 'src/app/shared/svg/svg-right/svg-right.component';
import { ProductsBlock } from '../products-block.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.component.html',
  styleUrls: ['./section-card.component.css'],
  standalone: true,
  imports: [TranslateModule, RouterLink, SvgRightComponent, NgClass],
})
export class SectionCardComponent {
  /**
   *
   */
  @Input()
  card!: ProductsBlock;
}
