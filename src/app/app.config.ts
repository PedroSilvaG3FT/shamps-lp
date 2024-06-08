import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { AnalyticsService } from './modules/@core/services/analytics.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    AnalyticsService,
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
};
