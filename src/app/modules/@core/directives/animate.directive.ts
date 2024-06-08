import {
  Input,
  OnInit,
  Inject,
  Directive,
  ElementRef,
  PLATFORM_ID,
  booleanAttribute,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  standalone: true,
  selector: '[animate]',
})
export class AnimateDirective implements OnInit {
  @Input() delay: number = 0;
  @Input({ required: true }) animation = '';
  @Input({ transform: booleanAttribute }) animationScroll = false;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.animationScroll) {
        this.el.nativeElement.style.visibility = 'hidden';
        this.setAnimationOnVisible();
      } else {
        this.setImmediateAnimation();
      }
    }
  }

  private setImmediateAnimation() {
    this.el.nativeElement.classList.add('animate__animated', this.animation);
  }

  private setAnimationOnVisible() {
    const threshold = 0.25;
    const element = this.el.nativeElement;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
            element.style.visibility = 'visible';
            element.style.animationDelay = `${this.delay}ms`;

            element.classList.add('animate__animated', this.animation);
            observer.unobserve(element);
          } else {
            element.style.visibility = 'hidden';
            element.classList.remove('animate__animated', this.animation);
          }
        });
      },
      {
        threshold,
        root: null,
        rootMargin: '0px',
      }
    );

    observer.observe(element);
  }
}
