import { Component, Input } from '@angular/core';
import { AnimateDirective } from '../../../@core/directives/animate.directive';

@Component({
  standalone: true,
  imports: [AnimateDirective],
  selector: 'app-landing-page-section-title',
  styleUrl: './landing-page-section-title.component.scss',
  templateUrl: './landing-page-section-title.component.html',
})
export class LandingPageSectionTitleComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) description: string = '';
}
