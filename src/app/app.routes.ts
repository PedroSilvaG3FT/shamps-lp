import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () =>
      import('../app/modules/landing-page/landing-page.component').then(
        (c) => c.LandingPageComponent
      ),
  },
];
