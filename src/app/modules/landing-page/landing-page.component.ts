import { Component, inject } from '@angular/core';
import { SSRService } from '../@core/services/ssr.service';
import { LandingPageHeroComponent } from './components/landing-page-hero/landing-page-hero.component';
import { LandingPageAboutComponent } from './components/landing-page-about/landing-page-about.component';
import { LandingPageFooterComponent } from './components/landing-page-footer/landing-page-footer.component';
import { LandingPageContactComponent } from './components/landing-page-contact/landing-page-contact.component';
import { LandingPageProposalsComponent } from './components/landing-page-proposals/landing-page-proposals.component';
import { LandingPagePublicationComponent } from './components/landing-page-publication/landing-page-publication.component';
import { LandingPageWorksComponent } from './components/landing-page-works/landing-page-works.component';

@Component({
  standalone: true,
  selector: 'app-landing-page',
  imports: [
    LandingPageHeroComponent,
    LandingPageAboutComponent,
    LandingPageWorksComponent,
    LandingPageFooterComponent,
    LandingPageContactComponent,
    LandingPageProposalsComponent,
    LandingPagePublicationComponent,
  ],
  template: `
    <app-landing-page-hero />
    <app-landing-page-proposals ngSkipHydration />
    <app-landing-page-about />
    <app-landing-page-works ngSkipHydration />
    <app-landing-page-contact />
    <app-landing-page-publication />
    <app-landing-page-footer />
  `,
})
export class LandingPageComponent {
  private ssrService = inject(SSRService);

  ngOnInit() {
    this.ssrService.setSeoOptimization({
      author: `Rooney Shamps`,
      publisher: `Campanha Rooney Shamps`,
      title: `Rooney Shamps - Pré-Candidato a Vereador`,
      ogTitle: `Rooney Shamps - Pré-Candidato a Vereador`,
      ogDescription: `Acompanhe a campanha de Rooney Shamps, pré-candidato a vereador. Descubra suas propostas para transformar o município, conheça sua história e fique por dentro das últimas novidades.`,
      description: `Bem-vindo ao portal de Rooney Shamps, pré-candidato a vereador. Conheça suas propostas para saúde, educação, segurança e desenvolvimento econômico. Saiba mais sobre sua história, entre em contato e acompanhe suas publicações.`,
      keywords: [
        `Lula`,
        `Itaqua`,
        `Itaquá`,
        `eleições`,
        `vereador`,
        `Tarcísio`,
        `São Paulo`,
        `Bolsonaro`,
        `Republicanos`,
        `eleições 2024`,
        `Rooney Shamps`,
        `meio ambiente`,
        `política local`,
        `eduardo boigues`,
        `cidadania ativa`,
        `itaquaquecetuba`,
        `sustentabilidade`,
        `Prefeito Eduardo`,
        `qualidade de vida`,
        `mobilidade urbana`,
        `saúde e bem-estar`,
        `serviços públicos`,
        `segurança pública`,
        `política municipal`,
        `ações comunitárias`,
        `campanha eleitoral`,
        `Tarcísio de Freitas`,
        `educação para todos`,
        `propostas políticas`,
        `participação cidadã`,
        `investimento público`,
        `melhoria das escolas`,
        `infraestrutura urbana`,
        `transparência política`,
        `representação política`,
        `pré-candidato a vereador`,
        `desenvolvimento econômico`,
      ],
    });
  }
}
