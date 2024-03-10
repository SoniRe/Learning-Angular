import { Component } from '@angular/core';
import { Sidebar2Component } from '../sidebar2/sidebar2.component';
import { ThemeService } from '../../services/theme.service';
import { RouterOutlet } from '@angular/router';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-dashboard2',
  standalone: true,
  imports: [Sidebar2Component, RouterOutlet, SettingsComponent],
  templateUrl: './dashboard2.component.html',
  styleUrl: './dashboard2.component.css',
})
export class Dashboard2Component {
  constructor(public themeService: ThemeService) {}
}
