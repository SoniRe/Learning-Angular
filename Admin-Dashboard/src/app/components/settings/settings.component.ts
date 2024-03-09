import gsap from 'gsap';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
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
