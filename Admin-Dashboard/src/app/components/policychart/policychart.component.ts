import { Component, signal } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-policychart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './policychart.component.html',
  styleUrl: './policychart.component.css',
})
export class PolicychartComponent {
  constructor() {}

  height = innerWidth < 600 ? innerHeight * 0.5 : innerHeight * 0.6;
  width = innerWidth < 600 ? innerWidth * 0.7 : innerWidth * 0.35;

  chart = new Chart({
    chart: {
      type: 'line',
      height: this.height,
      width: this.width,
      backgroundColor: '',
    },
    title: {
      text: 'Policy Charges',
      align: 'left',
      style: {
        color: '#2CAFFE',
      },
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'March', 'May', 'Jun', 'July'],
      lineColor: '',
      labels: {
        style: {
          color: '#2CAFFE',
        },
      },
    },
    yAxis: {
      title: {
        text: 'Revenue in $',
        style: {
          color: '#2CAFFE',
        },
      },
      labels: {
        style: {
          color: '#2CAFFE',
        },
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
