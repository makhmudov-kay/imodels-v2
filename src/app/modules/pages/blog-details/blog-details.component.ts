import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog/services/blog.service';
import { BlogDetails } from '../blog/models/blog-details.model';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { MyTranslatePipe } from 'src/app/shared/pipes/my-translate.pipe';
import { QuillModule } from 'ngx-quill';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    DatePipe,
    MyTranslatePipe,
    QuillModule,
    NzDividerModule,
    NzSpinModule,
  ],
})
export class BlogDetailsComponent {
  route = inject(ActivatedRoute);
  $blog = inject(BlogService);
  blog$!: Observable<BlogDetails>;
  get popular$() {
    return this.$blog.popular$;
  }
  constructor() {
    this.route.params.subscribe((params) => {
      this.blog$ = this.$blog.getById(params['id']);
    });
  }
}
