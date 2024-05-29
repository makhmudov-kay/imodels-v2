import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HandleImgErrrorDirective } from 'src/app/shared/directives/handle-img-error.directive';
import { MyCurrencyPipe } from 'src/app/shared/pipes/my-currency.pipe';
import { MyTranslatePipe } from 'src/app/shared/pipes/my-translate.pipe';
import { SvgTrashComponent } from 'src/app/shared/svg/svg-trash/svg-trash.component';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  standalone: true,
  imports: [
    HandleImgErrrorDirective,
    SvgTrashComponent,
    MyTranslatePipe,
    AsyncPipe,
    MyCurrencyPipe
  ],
})
export class CartItemComponent {
  @Input()
  item!: any;

  @Output()
  deleteProduct = new EventEmitter<number>();
}
