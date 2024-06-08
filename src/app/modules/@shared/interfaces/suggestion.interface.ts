import { Timestamp } from 'firebase/firestore';

export interface ISuggestionDB {
  id?: string;
  author: string;
  suggestion: string;
  creationDate: Timestamp;
}

export interface ISuggestionItem extends Omit<ISuggestionDB, 'creationDate'> {
  creationDate: Date;
}
