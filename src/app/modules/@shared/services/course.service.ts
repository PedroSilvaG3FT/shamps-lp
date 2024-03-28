import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { ICourseItem } from '../interfaces/course.interface';

@Injectable({ providedIn: 'root' })
export class CourseService {
  constructor() {}

  getByAlias(alias: string) {
    return new Observable((suscriber: Subscriber<ICourseItem>) => {
      setTimeout(() => {
        suscriber.next({
          alias: alias,
          uuid: `uuid`,
          videosURL: [],
          name: `Apostila de Brigadeiro Gourmet`,
          link: `https://angular-boilerplate-xi-gold.vercel.app/`,
          description: `Descubra mais de 50 deliciosas receitas de brigadeiro gourmet nesta apostila completa. Aprenda a fazer doces incríveis para festas e aumente sua renda extra em casa.`,
          seoOptimization: {
            author: 'John Due',
            publisher: 'Galaxy cursos',
            title: `Apostila de Brigadeiro Gourmet: Mais de 50 Receitas para Renda Extra em Casa`,
            ogTitle: `Apostila de Brigadeiro Gourmet: Mais de 50 Receitas para Renda Extra em Casa`,
            description: `Apostila completa com mais de 50 receitas de Brigadeiro Gourmet para fazer uma renda extra em casa. O doce mais amado do Brasil agora em várias versões.`,
            ogDescription: `Descubra mais de 50 deliciosas receitas de brigadeiro gourmet nesta apostila completa. Aprenda a fazer doces incríveis para festas e aumente sua renda extra em casa.`,
            keywords: [
              'Kit Festa',
              'Doces de Festa',
              'Culinária Caseira',
              'Doces para Vender',
              'Brigadeiro Gourmet',
              'Renda Extra em Casa',
              'Confeitaria Caseira',
              'Receitas de Brigadeiro',
              'Empreendedorismo na Cozinha',
              'Apostila de Brigadeiro Gourmet',
            ],
          },
        });
      }, 1000);
    });
  }
}
