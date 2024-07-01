import { Id } from 'src/app/shared/models/id.model';
import { LanguageModel } from 'src/app/shared/models/language.model';

export interface Blog extends Id {
  preview_image: string;
  title: LanguageModel;
  created_at: Date;
  description: LanguageModel;
}
