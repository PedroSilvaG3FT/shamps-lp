import { Component } from '@angular/core';
import { AnimateDirective } from '../../../@core/directives/animate.directive';
import { AppSocialMediaComponent } from '../../../@core/components/app-social-media/app-social-media.component';
import { LandingPageSectionTitleComponent } from '../landing-page-section-title/landing-page-section-title.component';

@Component({
  standalone: true,
  selector: 'app-landing-page-publication',
  styleUrl: './landing-page-publication.component.scss',
  templateUrl: './landing-page-publication.component.html',
  imports: [
    AnimateDirective,
    AppSocialMediaComponent,
    LandingPageSectionTitleComponent,
  ],
})
export class LandingPagePublicationComponent {
  public publications = [
    {
      title: `Anuncio oficial de pré candidatura`,
      link: `https://www.instagram.com/p/C7DCR5zOf1o/`,
      image: `/assets/images/publications/candidatura.png`,
      description: `AGORA É OFICIAL : Esse projeto não é só meu , é de todos nós! Então com isso estou AFIRMANDO, que...`,
    },
    {
      title: `Shamps afilia-se ao partido Republicanos`,
      link: `https://www.instagram.com/p/C7kbBxmOvq4/,`,
      image: `/assets/images/publications/republicanos.png`,
      description: `Sou Republicanos! E não poderia deixar de vim em um partido que defende às minhas bandeiras...`,
    },
    {
      title: `Moção de aplausos pela câmara municipal`,
      image: `/assets/images/publications/mocao.png`,
      link: `https://www.instagram.com/p/C7hA5z-ukst/`,
      description: `RECONHECIMENTO DO TRABALHO, Feito através da vigília apocalipse , atendendo os bairros e...`,
    },
    {
      title: `Associação Instituto Apocalipse.`,
      image: `/assets/images/publications/iap.png`,
      link: `https://www.instagram.com/p/Cva3FnJv_W1/?img_index=1`,
      description: `IAP Instituto Apocalipse recebe o título de utilidade pública em Itaquaquecetuba`,
    },
  ];
}
