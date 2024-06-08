import { Component } from '@angular/core';
import { AnimateDirective } from '../../../@core/directives/animate.directive';

@Component({
  standalone: true,
  imports: [AnimateDirective],
  selector: 'app-landing-page-hero',
  styleUrl: './landing-page-hero.component.scss',
  templateUrl: './landing-page-hero.component.html',
})
export class LandingPageHeroComponent {}
