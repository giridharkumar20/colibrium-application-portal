import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';


@Component({
  selector: 'app-claims-status',
  templateUrl: './claims-status.component.html',
  styleUrls: ['./claims-status.component.scss']
})
export class ClaimsStatusComponent implements OnInit {
  childData = {
    "title" : "Claims Status",
    "epname": "app-claim-status",
    "thisYear": false,
    "all": false,
    "slectb": false,
    "viewarchives": false,
    "search": false,
    "filter": false,
    "refresh": true,
    "floppy": false,
    "donload": false,
    "chart": false,
    "expand": true,
    "drag": true,
  }
  single: any[];
  public view = [700, 200];

  // options
  legend: boolean = false;
  gradient: boolean = false;
  showLegend: boolean = false;
  showLabels: boolean = false;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#24d2b5', '#20aee3', '#6772e5', '#ff9041', '#ff5c6c']
  };
  constructor() {
    Object.assign(this, { single });
    this.view = [700, 250];
  }
  onResize(event) {
    this.view = [700, 250];
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

  ngOnInit(): void {
  }

  totalClaim = [
    { name: "Sanctioned", value: 280 },
    { name: "280", value: 190 },
    { name: "Under Process", value: 250 },
    { name: "On Hold", value: 118 },
    { name: "Rejected", value: 120 }
  ];

  claimStatus = [
    {
      claimStatus: 'Sanctioned',
      claims: '280',
      amount: '10,000'
    },    
    {
      claimStatus: 'Disbursed',
      claims: '190',
      amount: '5,000'
    },    
    {
      claimStatus: 'Under Process',
      claims: '250',
      amount: '11,000'
    },    
    {
      claimStatus: 'On Hold',
      claims: '118',
      amount: '10,000'
    },    
    {
      claimStatus: 'Rejected',
      claims: '120',
      amount: '10,000'
    }
  ]

}
