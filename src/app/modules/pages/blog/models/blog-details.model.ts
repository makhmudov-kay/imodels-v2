import { LanguageModel } from 'src/app/shared/models/language.model';

export interface BlogDetails {
  created_at: Date;
  preview_image: string;
  title: LanguageModel;
  text: LanguageModel;
  description: LanguageModel;
}
