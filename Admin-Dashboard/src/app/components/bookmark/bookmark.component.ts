import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-bookmark',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './bookmark.component.html',
  styleUrl: './bookmark.component.css',
})
export class BookmarkComponent {}
