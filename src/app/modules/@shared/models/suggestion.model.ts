import { Timestamp } from 'firebase/firestore';
import { Injectable, inject } from '@angular/core';
import {
  ISuggestionDB,
  ISuggestionItem,
} from '../interfaces/suggestion.interface';

@Injectable({ providedIn: 'root' })
export class SuggestionModel {
  public buildItem(model: ISuggestionDB): ISuggestionItem {
    return {
      ...model,
      id: String(model.id),
      creationDate: model.creationDate?.toDate(),
    };
  }

  public buildList(model: ISuggestionDB[]) {
    return model.map((item) => this.buildItem(item));
  }

  public buildRegisterDTO(model: ISuggestionItem): ISuggestionDB {
    return {
      author: model.author,
      suggestion: model.suggestion,
      creationDate: Timestamp.fromDate(model.creationDate),
    };
  }
}
