import { Component } from '@angular/core';
import { AnimateDirective } from '../../../@core/directives/animate.directive';
import { AppSocialMediaComponent } from '../../../@core/components/app-social-media/app-social-media.component';
import { LandingPageSectionTitleComponent } from '../landing-page-section-title/landing-page-section-title.component';

@Component({
  standalone: true,
  selector: 'app-landing-page-about',
  styleUrl: './landing-page-about.component.scss',
  templateUrl: './landing-page-about.component.html',
  imports: [
    AnimateDirective,
    AppSocialMediaComponent,
    LandingPageSectionTitleComponent,
  ],
})
export class LandingPageAboutComponent {}
