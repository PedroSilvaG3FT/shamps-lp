import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SOCIAL_MEDIA } from '../../../@shared/constants/social-media.constant';
import { AppSocialMediaComponent } from '../../../@core/components/app-social-media/app-social-media.component';

@Component({
  standalone: true,
  selector: 'app-landing-page-footer',
  imports: [RouterModule, AppSocialMediaComponent],
  styleUrl: './landing-page-footer.component.scss',
  templateUrl: './landing-page-footer.component.html',
})
export class LandingPageFooterComponent {
  public socialMediaItems = SOCIAL_MEDIA;
}
