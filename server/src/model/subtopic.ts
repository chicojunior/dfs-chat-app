import { Item } from './item';

export interface Subtopic {
  id: number;
  name: string;
  items?: Item[];
}
