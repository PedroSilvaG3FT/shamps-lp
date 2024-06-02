import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-member-header',
  styleUrl: './member-header.component.scss',
  templateUrl: './member-header.component.html',
})
export class MemberHeaderComponent {}
