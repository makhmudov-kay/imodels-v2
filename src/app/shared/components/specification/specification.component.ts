import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Specification } from './specification.model';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.less'],
  standalone: true,
  imports: [NgFor, TranslateModule],
})
export class SpecificationComponent {
  /**
   */
  @Input()
  specifications!: Specification;
}
