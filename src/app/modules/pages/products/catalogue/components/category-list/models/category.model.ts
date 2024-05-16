import { Id } from 'src/app/shared/models/id.model';
import { LanguageModel } from 'src/app/shared/models/language.model';

export interface CategoryWithChildren extends Id {
  name: LanguageModel;
  subcategories: Category[];
}

export interface Category extends Id {
  name: LanguageModel;
  count: number;
}
