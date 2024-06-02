import { Routes } from '@angular/router';

export const MEMBER_ROUTES: Routes = [
  {
    path: '',
    data: { id: 'member', title: 'Área do membro' },
    loadComponent: () =>
      import('../layout/member-layout/member-layout.component').then(
        (c) => c.MemberLayoutComponent
      ),
    children: [
      {
        path: '',
        data: { id: 'home', title: 'Home' },
        loadComponent: () =>
          import('./home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'cursos',
        data: { id: 'course', title: 'Cursos' },
        loadComponent: () =>
          import('./course/course.component').then((c) => c.CourseComponent),
      },
      {
        path: 'cursos/:alias',
        data: { id: 'course-detail', title: 'Detalhes' },
        loadComponent: () =>
          import('./course/courser-detail/courser-detail.component').then(
            (c) => c.CourserDetailComponent
          ),
      },
    ],
  },
];
