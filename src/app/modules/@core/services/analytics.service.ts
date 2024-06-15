import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

declare var gtag: any;

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private $routerSubscription!: Subscription;

  constructor(
    private _router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.$routerSubscription = this._router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          if (typeof gtag !== 'undefined') {
            gtag('js', new Date());
            gtag('config', environment.firebase.measurementId);
          }
        });
    }
  }

  ngOnDestroy() {
    if (this.$routerSubscription) {
      this.$routerSubscription.unsubscribe();
    }
  }

  public init() {
    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${environment.firebase.measurementId}`;
      script.async = true;

      document.head.appendChild(script);

      const gtagEl = document.createElement('script');
      const gtagBody = document.createTextNode(`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
      `);

      gtagEl.appendChild(gtagBody);
      document.body.appendChild(gtagEl);
    }
  }

  public emit(event: string, payload: object) {
    if (isPlatformBrowser(this.platformId) && typeof gtag !== 'undefined') {
      gtag('event', event, payload);
    }
  }
}
