import { KeyValuePipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { Constants, CurrencyType, LanguageType } from 'src/app/core/configs/constants';
import { Settings } from 'src/app/core/helpers/settings';
import { SvgDownComponent } from 'src/app/shared/svg/svg-down/svg-down.component';
import { SvgEnFlagComponent } from 'src/app/shared/svg/svg-en-flag/svg-en-flag.component';
import { SvgRuFlagComponent } from 'src/app/shared/svg/svg-ru-flag/svg-ru-flag.component';
import { SvgUzbFlagComponent } from 'src/app/shared/svg/svg-uzb-flag/svg-uzb-flag.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.less'],
  standalone: true,
  imports: [NzPopoverModule, SvgDownComponent, SvgUzbFlagComponent, SvgRuFlagComponent, SvgEnFlagComponent, NgIf, NzSelectModule, FormsModule, NzDividerModule, KeyValuePipe, NgFor]
})
export class LanguageComponent {
  /**
   */
  visibleLangPopover = false

  /**
  *
  */
  readonly LANGUAGE = Constants.Language;
  readonly CURRENCY = Constants.CURRENCY;

  /**
   *
   */
  get currentLanguage() {
    return this.settings.language;
  }

  /**
   *
   */
  get currentCurrency() {
    return this.settings.currency;
  }

  /**
   * 
   * @param translate 
   * @param settings 
   */
  constructor(
    private translate: TranslateService,
    private settings: Settings
  ) { }

  /**
   * 
   * @param state 
   */
  toggleLangPopup(state: boolean) {
    this.visibleLangPopover = state
  }

  /**
   *
   * @param e
   */
  onChangeLanguage(e: LanguageType) {
    this.settings.language = e;
    this.translate.use(this.settings.language);
    this.visibleLangPopover = false;
  }

  /**
   *
   * @param e
   */
  onChangeCurrency(e: CurrencyType) {
    this.settings.currency = e;
    this.visibleLangPopover = false;
  }
}
