import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode = signal(false);

  constructor() {}

  toggleLightMode() {
    this.isDarkMode.update((oldVal) => !oldVal);
  }
}
