export type LanguageType = 'uz' | 'ru' | 'en';
export type CurrencyType = 'uzs' | 'usd' | 'eur';

export class Constants {
  public static readonly PAGE_SIZE = 12;
  public static readonly PAGE_INDEX = 1;

  public static readonly CURRENCY_UZS: CurrencyType = 'uzs';
  public static readonly CURRENCY_USD: CurrencyType = 'usd';
  public static readonly CURRENCY_EURO: CurrencyType = 'eur';

  public static readonly CURRENCY = {
    [Constants.CURRENCY_UZS]: {
      code: Constants.CURRENCY_UZS,
      name: 'UZS, so’m',
      symbol: 'so’m',
    },
    [Constants.CURRENCY_USD]: {
      code: Constants.CURRENCY_USD,
      name: 'USD, $',
      symbol: '$',
    },
    [Constants.CURRENCY_EURO]: {
      code: Constants.CURRENCY_EURO,
      name: 'EUR, €',
      symbol: '€',
    },
  };

  public static readonly Language = {
    uz: "O'ZB",
    ru: 'RU',
    en: 'EN',
  };

  public static readonly DEFAULT_LANGUAGE: LanguageType = 'uz';
  public static readonly DEFAULT_CURRENCY: CurrencyType = this.CURRENCY_UZS;

  //   LOCALTROAGE KEYS
  public static readonly LOCALSTORAGE_CURRENT_LANGUAGE = 'currentLanguage';
  public static readonly LOCALSTORAGE_CURRENT_CURRENCY = 'currentCurrency';

  // PREFIX
  public static readonly PHONE_PREFIX = '+998';
}
