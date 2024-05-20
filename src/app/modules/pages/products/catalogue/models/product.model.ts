import { Id } from 'src/app/shared/models/id.model';
import { LanguageModel } from 'src/app/shared/models/language.model';
import { Price } from 'src/app/shared/models/price.model';

export interface Product extends Id {
  category: number[];
  title: LanguageModel;
  image: string;
  price: Price;
  discount: number;
  new_price: Price;
  order_by: number;
}
