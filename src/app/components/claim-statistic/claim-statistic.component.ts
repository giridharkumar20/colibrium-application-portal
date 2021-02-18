import { Component, OnInit, NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';

@Component({
  selector: 'app-claim-statistic',
  templateUrl: './claim-statistic.component.html',
  styleUrls: ['./claim-statistic.component.scss']
})
export class ClaimStatisticComponent implements OnInit {

  childData = {
    "title" : "Claims Statistic",
    "epname": "app-claim-statistic",
    "thisYear": true,
    "all": false,
    "slectb": false,
    "viewarchives": false,
    "search": false,
    "filter": false,
    "refresh": true,
    "floppy": false,
    "donload": false,
    "chart": true,
    "expand": true,
    "drag": true,
  }
  

  multi: any[];
  view: [];
  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  yAxisLabel: string = '';
  timeline: boolean = true;
  colorScheme = {
    domain: ['#24d2b5', '#9edcf3', '#6772e5']
  };

  constructor() { 
    Object.assign(this, { multi });
  }
  ngOnInit(): void {
    // console.log(this.closeModal)
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
