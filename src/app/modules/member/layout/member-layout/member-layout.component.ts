import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'app-member-layout',
  styleUrl: './member-layout.component.scss',
  templateUrl: './member-layout.component.html',
})
export class MemberLayoutComponent {}
