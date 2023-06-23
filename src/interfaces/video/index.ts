import { TextInterface } from 'interfaces/text';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VideoInterface {
  id?: string;
  file_path: string;
  status: string;
  text_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  text?: TextInterface;
  user?: UserInterface;
  _count?: {};
}

export interface VideoGetQueryInterface extends GetQueryInterface {
  id?: string;
  file_path?: string;
  status?: string;
  text_id?: string;
  user_id?: string;
}
