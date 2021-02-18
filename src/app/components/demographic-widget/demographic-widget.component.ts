import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demographic-widget',
  templateUrl: './demographic-widget.component.html',
  styleUrls: ['./demographic-widget.component.scss']
})
export class DemographicWidgetComponent implements OnInit {
  childData = {
    "title" : "Demographic Widget",
    "epname": "app-demographic-widget",
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
  constructor() { }

  ngOnInit(): void {
  }

}
