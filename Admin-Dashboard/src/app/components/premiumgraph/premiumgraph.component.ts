import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-premiumgraph',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './premiumgraph.component.html',
  styleUrl: './premiumgraph.component.css',
})
export class PremiumgraphComponent {
  height = innerWidth < 600 ? innerHeight * 0.5 : innerHeight * 0.6;
  width = innerWidth < 600 ? innerWidth * 0.8 : innerWidth * 0.4;

  chart = new Chart({
    chart: {
      height: this.height,
      width: this.width,
    },
    title: {
      text: 'Premium Equivalent',
      align: 'left',
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
      ],
    },
    series: [
      {
        type: 'column',
        name: 'Premium',
        borderRadius: 5,
        color: 'violet',
        data: [5412, 4977, 4730, 4437, 3947, 3707, 4143, 3609, 2887],
        showInLegend: false,
      },
    ],
  });
}
