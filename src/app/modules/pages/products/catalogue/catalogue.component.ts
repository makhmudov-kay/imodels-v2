import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { SectionTitleComponent } from 'src/app/shared/components/section-title/section-title.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { AsyncPipe, NgFor, NgIf, SlicePipe } from '@angular/common';
import { ProductService } from './services/product.service';
import { Observable, debounceTime, takeUntil } from 'rxjs';
import { Grid } from 'src/app/shared/models/grid.model';
import { Product } from './models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgDestroy } from 'src/app/core/services/ng-destroy.service';
import { NzResultModule } from 'ng-zorro-antd/result';
import { TranslateModule } from '@ngx-translate/core';
import { SkeletonCardComponent } from 'src/app/shared/components/skeleton-card/skeleton-card.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
  standalone: true,
  imports: [
    SectionTitleComponent,
    CategoryListComponent,
    ProductCardComponent,
    NgFor,
    NgIf,
    AsyncPipe,
    NzResultModule,
    TranslateModule,
    SkeletonCardComponent,
    NzPaginationModule,
    SlicePipe,
  ],
  providers: [NgDestroy],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogueComponent implements OnInit {
  /**
   *
   */
  $product = inject(ProductService);
  private route = inject(ActivatedRoute);
  private $destroy = inject(NgDestroy);
  private router = inject(Router);

  /**
   *
   */
  product$!: Observable<Grid<Product>>;
  discountProduct$!: Observable<Product[]>;

  /**
   *
   */
  public get pageIndex(): number {
    return this.$product.pageIndex;
  }
  public set pageIndex(v: number) {
    this.$product.pageIndex = v;
  }

  /**
   *
   */
  readonly PAGE_SIZE = 12;
  categoryId!: number;

  /**
   *
   */
  ngOnInit(): void {
    this.getAllProducts();
    this.getDiscountProducts();
    this.route.queryParams
      .pipe(takeUntil(this.$destroy))
      .subscribe((params) => {
        this.categoryId = Number(params['category_id']);
        this.pageIndex = Number(params['page']);
        if (this.categoryId === 0) {
          this.getAllProducts();
          return;
        }
        this.filterDataByCategory(this.categoryId);
      });
  }

  /**
   *
   */
  getAllProducts() {
    this.product$ = this.$product.getAll();
  }

  /**
   *
   */
  getDiscountProducts() {
    this.discountProduct$ = this.$product.getProductsWithDiscount();
  }

  /**
   *
   * @param pageIndex
   */
  handlePageIndexChange(pageIndex: number) {
    this.pageIndex = pageIndex;
    this.router.navigate([], {
      queryParams: { page: pageIndex, category_id: this.categoryId },
    });
    this.getAllProducts();
  }

  /**
   *
   * @param categoryId
   */
  filterDataByCategory(categoryId: number) {
    this.product$ = this.$product.getAll(categoryId);
  }

  /**
   *
   * @param text
   */
  search(text: string) {
    this.product$ = this.$product
      .getAll(undefined, text)
      .pipe(debounceTime(1000));
  }
}
