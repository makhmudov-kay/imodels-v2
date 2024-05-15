import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.less'],
  standalone: true,
})
export class CategoryItemComponent {
  @Input()
  id!: number;

  @Output()
  selected = new EventEmitter();
}
