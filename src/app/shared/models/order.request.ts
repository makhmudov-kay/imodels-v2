import { Id } from './id.model';
import { LanguageModel } from './language.model';
import { Price } from './price.model';

export interface OrderRequest {
  configurator: number | null;
  product: number;
  quantity: number | undefined;
  price: Price;
}

export interface OrderList extends Id {
  created_at: Date;
  order_products: OrderProduct[];
}

export interface OrderProduct extends Id {
  configurator: number;
  image: string;
  price: Price;
  quantity: number;
  title: LanguageModel;
}
