import { Id } from 'src/app/shared/models/id.model';

export interface UserDetail extends Id {
  first_name: string;
  last_name: string;
  phone: string;
}
