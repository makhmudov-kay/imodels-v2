import { Id } from './id.model';
import { LanguageModel } from './language.model';

export interface CategoryWithChildren extends Id {
  name: LanguageModel;
  subcategories: Category[];
}

export interface Category extends Id {
  name: LanguageModel;
  count: number;
}
