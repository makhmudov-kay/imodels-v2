import { CurrencyType, LanguageType } from 'src/app/core/configs/constants';

export interface DataStateModel {
  /**
   *
   */
  currentCurrency: CurrencyType;

  /**
   *
   */
  currentLanguage: LanguageType;

  /**
   * 
   */
  cart: any[];
}
