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
  width = innerWidth < 600 ? innerWidth * 0.7 : innerWidth * 0.35;

  chart = new Chart({
    chart: {
      height: this.height,
      width: this.width,
      backgroundColor: '',
    },
    title: {
      text: 'Premium Equivalent',
      align: 'left',
      style: {
        color: '#EE82EE',
      },
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
      labels: {
        style: {
          color: '#EE82EE',
        },
      },
    },
    yAxis: {
      title: {
        text: 'Premium in $',
        style: {
          color: 'violet',
        },
      },
      labels: {
        style: {
          color: 'violet',
        },
      },
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
