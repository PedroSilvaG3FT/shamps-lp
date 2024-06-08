import { Component } from '@angular/core';
import { AnimateDirective } from '../../../@core/directives/animate.directive';
import { LandingPageSectionTitleComponent } from '../landing-page-section-title/landing-page-section-title.component';

@Component({
  standalone: true,
  selector: 'app-landing-page-proposals',
  styleUrl: './landing-page-proposals.component.scss',
  templateUrl: './landing-page-proposals.component.html',
  imports: [LandingPageSectionTitleComponent, AnimateDirective],
})
export class LandingPageProposalsComponent {
  public proposals = [
    {
      icon: `solar:health-outline`,
      title: `Saúde e Bem-Estar`,
      description: `A saúde é um direito fundamental de todos os cidadãos. Estou comprometido em melhorar o sistema de saúde, garantindo que todos tenham acesso a serviços médicos de qualidade. Minha proposta inclui seguir com a ampliação e modernização das unidades de saúde e contratação de mais profissionais qualificados.`,
    },
    {
      icon: `game-icons:black-book`,
      title: `Educação para Todos`,
      description: `A educação é a base para um futuro próspero e justo. Eu acredito que cada criança e jovem deve ter acesso a uma educação de qualidade, independentemente de sua condição socioeconômica. Minha proposta visa investir significativamente nas escolas públicas e garantir a capacitação contínua dos professores.`,
    },
    {
      icon: `carbon:security`,
      title: `Segurança e Justiça`,
      description: `A segurança pública é essencial para o bem-estar da nossa comunidade. Eu proponho um conjunto de medidas para reduzir a criminalidade e promover a justiça. Minha proposta inclui o fortalecimento das forças de segurança, a implementação de políticas públicas eficazes e o combate rigoroso à corrupção.`,
    },
    {
      icon: `uil:graph-bar`,
      title: `Desenvolvimento Econômico`,
      description: `Acredito que o desenvolvimento econômico sustentável é essencial para um futuro próspero. Minha proposta apoia pequenas e médias empresas, atrair investimentos e incentivar programas de capacitação profissional para gerar oportunidades de emprego dignas.`,
    },
  ];
}
