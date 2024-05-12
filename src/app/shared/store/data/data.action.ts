import { CurrencyType, LanguageType } from 'src/app/core/configs/constants';

export class CurrentCurrencyAction {
  /**
   *
   */
  static readonly type = 'Current currency';

  /**
   *
   * @param currentCurrency
   */
  constructor(public currentCurrency: CurrencyType) {}
}

export class CurrentLanguageAction {
  /**
   *
   */
  static readonly type = 'Current language';

  /**
   *
   * @param currentLanguage
   */
  constructor(public currentLanguage: LanguageType) {}
}

export class CartAction {
  /**
   *
   */
  static readonly type = 'Cart';

  /**
   *
   * @param cart
   */
  constructor(public cart: any[]) {}
}
