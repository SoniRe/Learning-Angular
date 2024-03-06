import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CardComponent } from '../card/card.component';
import { PolicychartComponent } from '../policychart/policychart.component';
import { PremiumgraphComponent } from '../premiumgraph/premiumgraph.component';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidebarComponent,
    CardComponent,
    PolicychartComponent,
    PremiumgraphComponent,
    RouterLink,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(public authService: AuthService) {}
}
