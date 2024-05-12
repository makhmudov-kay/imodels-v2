import { Pipe, PipeTransform, inject } from '@angular/core';
import { LanguageModel } from '../models/language.model';
import { Settings } from 'src/app/core/helpers/settings';
import { Observable, of, switchMap } from 'rxjs';

@Pipe({
  name: 'myTranslate',
  standalone: true,
  pure: false,
})
export class MyTranslatePipe implements PipeTransform {
  settings = inject(Settings);

  transform(value: LanguageModel | string): Observable<string> {
    if (typeof value === 'string') {
      return of(value);
    }

    return this.settings.getLanguageObservable().pipe(
      switchMap((language: string) => {
        return of(value[language as keyof LanguageModel]);
      })
    );
  }
}
