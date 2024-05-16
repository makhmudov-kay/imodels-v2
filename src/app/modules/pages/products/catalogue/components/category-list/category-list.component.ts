import { Component, EventEmitter, Output, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { CategoryItemComponent } from '../category-item/category-item.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { CategoryService } from './services/category.service';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SvgSearchComponent } from 'src/app/shared/svg/svg-search/svg-search.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.less'],
  standalone: true,
  imports: [
    TranslateModule,
    FormsModule,
    CategoryItemComponent,
    NgFor,
    NgIf,
    AsyncPipe,
    NzInputModule,
    SvgSearchComponent,
    FormsModule,
    NzIconModule,
  ],
})
export class CategoryListComponent {
  /**
   *
   */
  @Output()
  search = new EventEmitter<string>();

  /**
   *
   */
  @Output()
  resetInput = new EventEmitter();

  /**
   *
   */
  value = '';

  /**
   *
   */
  $category = inject(CategoryService);

  /**
   *
   */
  get category$() {
    return this.$category.category$;
  }

  /**
   *
   */
  searchText() {
    this.search.emit(this.value);
  }

  /**
   *
   */
  resetInputHanlder() {
    this.resetInput.emit();
    this.value = '';
  }
}
