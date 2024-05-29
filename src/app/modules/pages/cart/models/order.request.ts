import { Id } from '../../../../shared/models/id.model';
import { LanguageModel } from '../../../../shared/models/language.model';
import { Price } from '../../../../shared/models/price.model';

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
