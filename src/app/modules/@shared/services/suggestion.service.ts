import { Injectable } from '@angular/core';
import { SuggestionModel } from '../models/suggestion.model';
import { FIREBASE_COLLECTION } from '../constants/firebase.constant';
import { FirebaseCollectionBase } from '../../@core/firebase/firebase-collection.base';

@Injectable({ providedIn: 'root' })
export class SuggestionService extends FirebaseCollectionBase {
  constructor(public _model: SuggestionModel) {
    super(FIREBASE_COLLECTION.suggestion);
  }
}
