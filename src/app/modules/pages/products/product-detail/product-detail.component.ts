import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { ProductDetailSliderComponent } from './components/product-detail-slider/product-detail-slider.component';
import { ProductDetailInfoComponent } from './components/product-detail-info/product-detail-info.component';
import {
  ItemsType,
  ProductDetail,
  ProductItem,
} from './models/product-detail.model';
import { Observable, map, tap } from 'rxjs';
import { ProductDetailService } from './service/product-detail.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { MyTranslatePipe } from 'src/app/shared/pipes/my-translate.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less'],
  standalone: true,
  imports: [
    ProductDetailSliderComponent,
    ProductDetailInfoComponent,
    NgIf,
    AsyncPipe,
    NzSpinModule,
    MyTranslatePipe,
    NgFor,
    TranslateModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit {
  /**
   *
   */
  id!: string | null;
  product$!: Observable<ProductDetail>;
  modules!: ProductItem[];
  sanitizer!: DomSanitizer;

  /**
   */
  private $product = inject(ProductDetailService);
  private route = inject(ActivatedRoute);
  private $cd = inject(ChangeDetectorRef);
  private $sanitizer = inject(DomSanitizer);

  /**
   *
   */
  ngOnInit() {
    this.sanitizer = this.$sanitizer;
    this.route.params.subscribe((e) => {
      this.id = e['id'];
      this.getProductById();
    });
  }

  /**
   *
   */
  private getProductById() {
    if (this.id) {
      this.product$ = this.$product.getProductById(this.id).pipe(
        map((res) => res),
        tap((res) => {
          this.modules = this.collectionModules(res.items);
          this.$cd.markForCheck();
        })
      );
    }
  }

  /**
   *
   * @param items
   * @returns
   */
  collectionModules(items: ItemsType[]): ProductItem[] {
    let filteredItems: ProductItem[] = [];
    if (items && items.length) {
      items.forEach((item) => {
        item.product.forEach((el) => {
          filteredItems.push(el);
        });
      });
    }
    return filteredItems;
  }

  /**
   *
   * @param link
   * @returns
   */
  setUrl(link: string) {
    let id = link.split('=')[1];
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${id}`
    );
  }
}
