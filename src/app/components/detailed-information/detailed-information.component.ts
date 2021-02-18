import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss']
})
export class DetailedInformationComponent implements OnInit {
  childData = {
    "title" : "Stacy Wisner, MD",    
    // "notificationIcon": "assets/bell-icon.png",
    "epname": "app-detailed-information",
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
    "expand": false,
    "drag": false,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
