import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-recent-invoices',
  templateUrl: './recent-invoices.component.html',
  styleUrls: ['./recent-invoices.component.scss']
})
export class RecentInvoicesComponent implements OnInit {
  public scrollbarOptions = { axis: 'y', theme: 'minimal-dark', mouseWheel:{ scrollAmount: 200 }};
  childData = {
    "title" : "Recent Invoices (10)",
    "epname": "app-recent-invoices",
    "thisYear": false,
    "all": false,
    "slectb": false,
    "viewarchives": false,
    "searchBox": true,
    "filter": false,
    "refresh": true,
    "floppy": false,
    "donload": true,
    "chart": false,
    "expand": true,
    "drag": true,
  }
  constructor() { }

  invoicesData = {
    titles: [
      {"title":"Name"},
      {"title":"Invoice No."},
      {"title":"Date of Service"},
      {"title":"Status"},
      {"title":"Amount"}
    ],
    data:[
      {
        "name": "Ralph Crimson",
        "invoice":"28591",
        "dateofservice":"02-13-2019",
        "status":"Open",
        "amount":"$ 100.00",
        "color": "green"
      },
      {
        "name": "Ralph Crimson",
        "invoice":"28591",
        "dateofservice":"02-13-2019",
        "status":"Paid",
        "amount":"$ 100.00",
        "color": "blue"
      },
      {
        "name": "Ralph Crimson",
        "invoice":"28591",
        "dateofservice":"02-13-2019",
        "status":"Open",
        "amount":"$ 100.00",
        "color": "green"
      },
      {
        "name": "Ralph Crimson",
        "invoice":"28591",
        "dateofservice":"02-13-2019",
        "status":"Paid",
        "amount":"$ 100.00",
        "color": "purple"
      },
      {
        "name": "Ralph Crimson",
        "invoice":"28591",
        "dateofservice":"02-13-2019",
        "status":"Open",
        "amount":"$ 100.00",
        "color": "red"
      },
    ]
  }

  ngOnInit(): void {
  }

}
