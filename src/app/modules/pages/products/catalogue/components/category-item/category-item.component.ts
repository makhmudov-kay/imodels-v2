import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
export class CategoryItemComponent implements OnInit {
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
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private $cd = inject(ChangeDetectorRef);

  /**
   *
   */
  categoryId!: number;

  ngOnInit(): void {
    this.route.queryParams.subscribe((p) => {
      this.categoryId = +p['category_id'];
      this.$cd.markForCheck();
    });
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
