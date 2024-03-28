import { isPlatformServer } from '@angular/common';
import {
  Inject,
  inject,
  Injectable,
  PLATFORM_ID,
  makeStateKey,
  TransferState,
} from '@angular/core';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { ISeoOptimization } from '../interfaces/seo.interface';

@Injectable({ providedIn: 'root' })
export class SSRService {
  public isServerSide = false;

  public meta = inject(Meta);
  public title = inject(Title);
  public location = inject(Location);
  public transfer = inject(TransferState);

  constructor(@Inject(PLATFORM_ID) public platformId: Object) {
    this.isServerSide = isPlatformServer(platformId);
  }

  public setTransferData<Data>(key: string, data: Data) {
    this.transfer.set(makeStateKey<Data>(key), data);
  }

  public getTransferData<Data>(key: string, defaultValue = {} as Data) {
    return this.transfer.get<Data>(makeStateKey<Data>(key), defaultValue);
  }

  public setSeoOptimization(data: ISeoOptimization) {
    this.meta.updateTag({ name: 'title', content: data.title });
    this.meta.updateTag({ name: 'author', content: data.author });
    this.meta.updateTag({ name: 'publisher', content: data.publisher });
    this.meta.updateTag({ property: 'og:image', content: data.ogImage });
    this.meta.updateTag({ property: 'og:title', content: data.ogTitle });
    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({ name: 'keywords', content: data.keywords.join(',') });
    this.meta.updateTag({
      property: 'og:description',
      content: data.ogDescription,
    });

    this.meta.addTag({ rel: 'canonical', href: 'www.trste.com' });
  }
}
