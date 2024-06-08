import Iconify from '@iconify/iconify';
import { trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { LoadingStore } from './store/loading.store';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SEOService } from './modules/@core/services/seo.service';
import { Component, inject, afterNextRender } from '@angular/core';
import { ThemeService } from './modules/@core/services/theme.service';
import { ROUTER_STACK_ANIMATION } from './modules/@core/animations/router-stack.animation';
import { AppLoadingComponent } from './modules/@core/components/app-loading/app-loading.component';
import { AnalyticsService } from './modules/@core/services/analytics.service';

@Component({
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
  animations: [trigger('triggerName', ROUTER_STACK_ANIMATION)],
  imports: [CommonModule, RouterOutlet, RouterModule, AppLoadingComponent],
})
export class AppComponent {
  public loadingStore = inject(LoadingStore);
  public analyticsService = inject(AnalyticsService);

  constructor(
    private seoService: SEOService,
    private themeService: ThemeService
  ) {
    afterNextRender(() => {
      Iconify.listIcons();
      this.checkLoading();
      this.themeService.init();
      this.analyticsService.init();
      this.seoService.initTitleMonitoring();
    });
  }

  public prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData['id']
    );
  }

  public checkLoading() {
    if (this.loadingStore.show()) this.loadingStore.setState(false);
  }
}
