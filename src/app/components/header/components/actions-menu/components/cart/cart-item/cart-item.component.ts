import { Component } from '@angular/core';
import { HandleImgErrrorDirective } from 'src/app/shared/directives/handle-img-error.directive';
import { SvgTrashComponent } from 'src/app/shared/svg/svg-trash/svg-trash.component';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  standalone: true,
  imports: [HandleImgErrrorDirective, SvgTrashComponent]
})
export class CartItemComponent { }
