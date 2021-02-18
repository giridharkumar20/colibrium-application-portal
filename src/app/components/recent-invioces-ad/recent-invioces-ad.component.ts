import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-invioces-ad',
  templateUrl: './recent-invioces-ad.component.html',
  styleUrls: ['./recent-invioces-ad.component.scss']
})
export class RecentInviocesAdComponent implements OnInit {
  public scrollbarOptions = { axis: 'y', theme: 'minimal-dark', mouseWheel:{ scrollAmount: 200 }};
  adName = true;
  adInvoice = true;
  childData = {
    "title" : "Recent Invoices (10)",
    "epname": "app-recent-invoices",
    "thisYear": false,
    "all": false,
    "slectb": false,
    "viewarchives": false,
    "category": true,
    "searchBox": true,
    "filter": false,
    "refresh": false,
    "floppy": false,
    "donload": false,
    "chart": false,
    "expand": false,
    "drag": false,
    "pagePerView": true,
  }
  constructor() { }

  invoicesData = {
    titles: [
      {"title":"Name", "adName": true, "adInvoice": ''},
      {"title":"Invoice No.", "adName": '', "adInvoice": true},
      {"title":"Date of Service", "adName": '', "adInvoice": ''},
      {"title":"Status", "adName": '', "adInvoice": ''},
      {"title":"Amount", "adName": '', "adInvoice": ''}
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
  adNameClick() {
    this.adName = !this.adName;
  }
  adInvoiceClick() {
    this.adInvoice = !this.adInvoice;
  }
  ngOnInit(): void {
  }

}
