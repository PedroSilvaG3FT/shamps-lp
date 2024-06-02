import { Component } from '@angular/core';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { HomeHighlightComponent } from './home-highlight/home-highlight.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [HomeAboutComponent, HomeHeroComponent, HomeHighlightComponent],
  template: `
    <app-home-hero />
    <app-home-about />
    <app-home-highlight />
  `,
})
export class HomeComponent {}
