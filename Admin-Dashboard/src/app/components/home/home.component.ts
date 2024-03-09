import { Component, signal } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CardComponent } from '../card/card.component';
import { PolicychartComponent } from '../policychart/policychart.component';
import { PremiumgraphComponent } from '../premiumgraph/premiumgraph.component';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import gsap from 'gsap';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarComponent,
    CardComponent,
    PolicychartComponent,
    PremiumgraphComponent,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(
    public authService: AuthService,
    public themeService: ThemeService
  ) {}

  isMenuOpen = signal(true);

  toggleMenu() {
    if (this.isMenuOpen()) {
      gsap.to('#sidebar', {
        x: '-18vw',
        width: '0vw',
      });

      gsap.to('#dashboard', {
        width: '100vw',
      });

      gsap.to('.card', {
        width: '21.5vw',
      });
    } else {
      gsap.to('#sidebar', {
        x: '0',
        width: '18vw',
      });
      gsap.to('#dashboard', {
        x: '0',
        width: '82vw',
      });

      gsap.to('.card', {
        width: '17vw',
      });
    }

    this.isMenuOpen.update((oldVal) => !oldVal);
  }
}
