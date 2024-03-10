import gsap from 'gsap';
import { Component, signal } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  constructor(public layoutService: LayoutService) {}

  isSettingOpened = signal(false);

  toggleSetting() {
    if (!this.isSettingOpened()) {
      gsap.to('#setting-menu', {
        right: '0%',
      });
    } else {
      gsap.to('#setting-menu', {
        right: '-8%',
      });
    }

    this.isSettingOpened.update((oldval) => !oldval);
  }
}
