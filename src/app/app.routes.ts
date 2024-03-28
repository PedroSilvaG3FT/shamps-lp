import { Routes } from '@angular/router';
import { MEMBER_ROUTES } from './modules/member/pages/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  ...MEMBER_ROUTES,
];
