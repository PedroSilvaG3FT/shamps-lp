import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SOCIAL_MEDIA } from '../../../@shared/constants/social-media.constant';

@Component({
  standalone: true,
  imports: [MatTooltipModule],
  selector: 'app-social-media',
  styleUrl: './app-social-media.component.scss',
  templateUrl: './app-social-media.component.html',
})
export class AppSocialMediaComponent {
  public items = SOCIAL_MEDIA;
}
