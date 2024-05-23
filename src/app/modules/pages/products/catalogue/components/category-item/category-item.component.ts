import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Category } from '../category-list/models/category.model';
import { MyTranslatePipe } from 'src/app/shared/pipes/my-translate.pipe';
import { AsyncPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.less'],
  standalone: true,
  imports: [MyTranslatePipe, AsyncPipe, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryItemComponent {
  /**
   *
   */
  @Input()
  category!: Category;

  /**
   *
   */
  @Input()
  id!: number;

  /**
   *
   */
  @Input()
  categoryId!: number;

  /**
   *
   */
  @Output()
  handleSelectCategory = new EventEmitter<number>();
}
