import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { DataStateModel } from './data-state.model';
import {
  Constants,
  CurrencyType,
  LanguageType,
} from 'src/app/core/configs/constants';
import {
  CartAction,
  CurrentCurrencyAction,
  CurrentLanguageAction,
} from './data.action';

@State<DataStateModel>({
  name: 'data',
  defaults: {
    currentCurrency:
      (localStorage.getItem(
        Constants.LOCALSTORAGE_CURRENT_CURRENCY
      ) as CurrencyType) || Constants.DEFAULT_CURRENCY,
    currentLanguage:
      (localStorage.getItem(
        Constants.LOCALSTORAGE_CURRENT_LANGUAGE
      ) as LanguageType) || Constants.DEFAULT_LANGUAGE,
    cart: JSON.parse(localStorage.getItem('cart') || '[]'),
  },
})
@Injectable()
export class DataState {
  /**
   *
   * @param state State model
   */
  @Selector()
  static currentCurrency(state: DataStateModel) {
    return state.currentCurrency;
  }

  /**
   *
   * @param state State model
   */
  @Selector()
  static currentLanguage(state: DataStateModel) {
    return state.currentLanguage;
  }

  /**
   *
   * @param state State model
   */
  @Selector()
  static cart(state: DataStateModel) {
    return state.cart;
  }

  /**
   *
   * @param ctx
   * @returns
   */
  @Action(CurrentCurrencyAction)
  setCurrentCurrency(
    ctx: StateContext<DataStateModel>,
    action: CurrentCurrencyAction
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      currentCurrency: action.currentCurrency,
    });

    localStorage.setItem(
      Constants.LOCALSTORAGE_CURRENT_CURRENCY,
      action.currentCurrency
    );
  }

  /**
   *
   * @param ctx
   * @returns
   */
  @Action(CurrentLanguageAction)
  setCurrentLanguage(
    ctx: StateContext<DataStateModel>,
    action: CurrentLanguageAction
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      currentLanguage: action.currentLanguage,
    });

    localStorage.setItem(
      Constants.LOCALSTORAGE_CURRENT_LANGUAGE,
      action.currentLanguage
    );
  }

  /**
   *
   * @param ctx
   * @returns
   */
  @Action(CartAction)
  setCart(ctx: StateContext<DataStateModel>, action: CartAction) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      cart: [...action.cart],
    });

    localStorage.setItem('cart', JSON.stringify(action.cart));
  }
}
