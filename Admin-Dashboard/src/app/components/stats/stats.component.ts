import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css',
})
export class StatsComponent {}
