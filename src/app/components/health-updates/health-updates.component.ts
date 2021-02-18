import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-updates',
  templateUrl: './health-updates.component.html',
  styleUrls: ['./health-updates.component.scss']
})
export class HealthUpdatesComponent implements OnInit {
  childData = {
    "title" : "Health Updates",
    "epname": "app-health-updates",
    "thisYear": false,
    "all": false,
    "slectb": false,
    "viewarchives": true,
    "search": false,
    "filter": false,
    "refresh": true,
    "floppy": false,
    "donload": false,
    "chart": false,
    "expand": true,
    "drag": true,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
