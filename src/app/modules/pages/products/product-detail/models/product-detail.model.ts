import { Id } from '../../../../../shared/models/id.model';
import { LanguageModel } from '../../../../../shared/models/language.model';
import { Price } from '../../../../../shared/models/price.model';

export interface ProductDetail extends Id {
  category: number;
  title: LanguageModel;
  information: LanguageModel;
  price: Price;
  new_price: Price;
  discount: number;
  count?: number;
  configurator: any; //what type?
  items: ItemsType[];
  product_images: ImageItem[];
  product_galleries: ImageItem[];
  product_video: {
    id: number;
    title: LanguageModel;
    text: LanguageModel;
    video_link: string;
  };
  product_description: {
    id: number;
    title: LanguageModel;
    description_points: ProductDescriptionPoint[];
  };
  product_features: ProductFeature;
  main_item: ProductItem;
  is_configurator: boolean;
}

export interface ItemsType {
  type: string;
  product: ProductItem[];
  isOpened?: boolean;
}

export interface ProductItem extends Id {
  title: LanguageModel;
  price: Price;
  new_price: Price;
  image: string;
  discount: number;
  count?: number;
  totalPrice?: Price;
  is_configurator: boolean;
  configurator_id: number | null;
}

export interface ImageItem extends Id {
  image: string;
}

export interface ProductFeature extends Id {
  image: string;
  features: Feature[];
}

export interface Feature extends Id {
  feature: LanguageModel;
}

export interface ProductDescriptionPoint extends Id {
  text: LanguageModel;
}
