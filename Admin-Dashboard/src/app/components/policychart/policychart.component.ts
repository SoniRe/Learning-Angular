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
  chart = new Chart({
    chart: {
      type: 'line',
      height: 425,
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
