import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MemberHeaderComponent } from '../member-header/member-header.component';
import { MemberFooterComponent } from '../member-footer/member-footer.component';

@Component({
  standalone: true,
  selector: 'app-member-layout',
  styleUrl: './member-layout.component.scss',
  templateUrl: './member-layout.component.html',
  imports: [RouterOutlet, MemberHeaderComponent, MemberFooterComponent],
})
export class MemberLayoutComponent {}
