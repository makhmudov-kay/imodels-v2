import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform, inject } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { Constants, CurrencyType } from 'src/app/core/configs/constants';
import { Settings } from 'src/app/core/helpers/settings';

@Pipe({
  name: 'myCurrencySync',
  standalone: true,
  pure: false,
})
export class MyCurrencySyncPipe implements PipeTransform {
  settings = inject(Settings);
  decimal = inject(DecimalPipe);

  transform(value: any): any {
    if (value === undefined || value === null) {
      return '';
    }
    const number = this.decimal.transform(value[this.settings.currency]);
    if (number) {
      // Replace ',' with ' '
      let separatedNumber = number.replace(new RegExp(',', 'g'), ' ');
      return `${separatedNumber} ${
        localStorage.getItem(
          Constants.LOCALSTORAGE_CURRENT_CURRENCY
        ) as CurrencyType || Constants.DEFAULT_CURRENCY
      }`;
    }

    return of('');
  }
}
