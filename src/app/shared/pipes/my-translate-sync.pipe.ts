import { Pipe, PipeTransform, inject } from '@angular/core';
import { LanguageModel } from '../models/language.model';
import { Settings } from 'src/app/core/helpers/settings';
import { Observable, of, switchMap } from 'rxjs';
import { Constants } from 'src/app/core/configs/constants';

@Pipe({
  name: 'myTranslateSync',
  standalone: true,
  pure: false,
})
export class MyTranslateSyncPipe implements PipeTransform {
  settings = inject(Settings);

  transform(value: LanguageModel | string): string {
    if (typeof value === 'string') {
      return value;
    }

    return value[
      (localStorage.getItem(
        Constants.LOCALSTORAGE_CURRENT_LANGUAGE
      ) as keyof LanguageModel) || Constants.DEFAULT_LANGUAGE
    ];
  }
}
