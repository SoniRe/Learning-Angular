import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-policychart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './policychart.component.html',
  styleUrl: './policychart.component.css',
})
export class PolicychartComponent {
  height = innerWidth < 600 ? innerHeight * 0.5 : innerHeight * 0.6;
  width = innerWidth < 600 ? innerWidth * 0.8 : innerWidth * 0.4;

  chart = new Chart({
    chart: {
      type: 'line',
      height: this.height,
      width: this.width,
    },
    title: {
      text: 'Policy Charges',
      align: 'left',
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'March', 'May', 'Jun', 'July'],
    },
    yAxis: {
      title: {
        text: 'Revenue in $',
      },
    },
    series: [
      {
        name: 'Policy Charges Over Time',
        data: [800, 1000, 950, 1200, 1350, 1100],
      },
    ],
  } as any);
}
