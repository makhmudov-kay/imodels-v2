import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { CategoryItemComponent } from '../category-item/category-item.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { CategoryService } from './services/category.service';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SvgSearchComponent } from 'src/app/shared/svg/svg-search/svg-search.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SkeletonCatComponent } from './skeleton-cat/skeleton-cat.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { MyTranslatePipe } from 'src/app/shared/pipes/my-translate.pipe';
import { ActivatedRoute, Router } from '@angular/router';

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
    SkeletonCatComponent,
    NzSelectModule,
    MyTranslatePipe,
  ],
})
export class CategoryListComponent implements OnInit {
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
  categoryId = 0;

  /**
   *
   */
  $category = inject(CategoryService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private $cd = inject(ChangeDetectorRef);

  /**
   *
   */
  get category$() {
    return this.$category.category$;
  }

  /**
   *
   */
  ngOnInit(): void {
    this.route.queryParams.subscribe((p) => {
      this.categoryId = +p['category_id'];
      this.$cd.markForCheck();
    });
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

  /**
   *
   * @param categoryId
   */
  selectCategory(categoryId: number) {
    this.categoryId = categoryId;
    this.router.navigate([], {
      queryParams: { page: 1, category_id: categoryId },
    });
    this.$cd.markForCheck();
  }
}
