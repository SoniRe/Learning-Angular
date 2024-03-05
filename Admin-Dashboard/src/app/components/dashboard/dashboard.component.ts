import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CardComponent } from '../card/card.component';
import { PolicychartComponent } from '../policychart/policychart.component';
import { PremiumgraphComponent } from '../premiumgraph/premiumgraph.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidebarComponent,
    CardComponent,
    PolicychartComponent,
    PremiumgraphComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
