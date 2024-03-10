import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { RouterOutlet } from '@angular/router';
import { Sidebar3Component } from '../sidebar3/sidebar3.component';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-dashboard3',
  standalone: true,
  imports: [Sidebar3Component, RouterOutlet, SettingsComponent],
  templateUrl: './dashboard3.component.html',
  styleUrl: './dashboard3.component.css',
})
export class Dashboard3Component {
  constructor(public themeService: ThemeService) {}
}
