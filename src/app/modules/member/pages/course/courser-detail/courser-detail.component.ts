import { JsonPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { SSRService } from '../../../../@core/services/ssr.service';
import { ICourseItem } from '../../../../@shared/interfaces/course.interface';
import { CourseService } from '../../../../@shared/services/course.service';

@Component({
  standalone: true,
  imports: [JsonPipe, RouterLink],
  selector: 'app-courser-detail',
  styleUrl: './courser-detail.component.scss',
  templateUrl: './courser-detail.component.html',
})
export class CourserDetailComponent {
  private ssrService = inject(SSRService);
  private courseService = inject(CourseService);
  private activatedRoute = inject(ActivatedRoute);

  public course: ICourseItem = {} as ICourseItem;

  constructor() {
    if (this.ssrService.isServerSide) this.getCourse();
    else this.setCourse();
  }

  public getCourse() {
    const alias = this.activatedRoute.snapshot.params['alias'];

    this.courseService.getByAlias(alias).subscribe({
      next: (response) => {
        this.ssrService.setSeoOptimization(response.seoOptimization);
        this.ssrService.setTransferData('course', response);
      },
      error: () => this.ssrService.setTransferData('course', {}),
    });
  }

  public setCourse() {
    this.course = this.ssrService.getTransferData('course');
  }
}
