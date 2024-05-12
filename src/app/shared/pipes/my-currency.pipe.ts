import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform, inject } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { Constants } from 'src/app/core/configs/constants';
import { Settings } from 'src/app/core/helpers/settings';

@Pipe({
  name: 'myCurrency',
  standalone: true,
  pure: false,
})
export class MyCurrencyPipe implements PipeTransform {
  settings = inject(Settings);
  decimal = inject(DecimalPipe);

  transform(value: any): any {
    if (value === undefined || value === null) {
      return of('');
    }
    const number = this.decimal.transform(value[this.settings.currency]);
    if (number) {
      // Replace ',' with ' '
      let separatedNumber = number.replace(new RegExp(',', 'g'), ' ');
      return this.settings.getCurrencyObservable().pipe(
        switchMap((currentCurrency) => {
          return of(
            `${separatedNumber} ${Constants.CURRENCY[currentCurrency].symbol}`
          );
        })
      );
    }

    return of('');
  }
}
