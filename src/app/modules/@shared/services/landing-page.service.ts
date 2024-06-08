import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { ISeoOptimization } from '../../@core/interfaces/seo.interface';

@Injectable({ providedIn: 'root' })
export class LandingPageService {
  public getByAlias() {
    return new Observable((suscriber: Subscriber<ISeoOptimization>) => {
      setTimeout(() => {
        suscriber.next({
          author: 'Roneey Shamps',
          publisher: 'Roneey Shamps',
          title: ``,
          ogTitle: ``,
          description: ``,
          ogDescription: ``,
          keywords: [],
        });
      }, 1000);
    });
  }
}
