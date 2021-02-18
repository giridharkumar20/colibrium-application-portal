import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

interface UploadDataDropDown {
  name: string,
}

@Component({
  selector: 'app-upload-data-file',
  templateUrl: './upload-data-file.component.html',
  styleUrls: ['./upload-data-file.component.scss'],  
  providers: [MessageService],
})
export class UploadDataFileComponent implements OnInit {
  selectedUploadDataDropDown: UploadDataDropDown;
  uploadDataDropDown: UploadDataDropDown[]
  childData = {
    "title" : "Document Upload (3)",
    "notificationIcon": "assets/bell-icon.png",
    "epname": "app-upload-data-file",
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

  public scrollbarOptions = { axis: 'y', theme: 'light' };

  constructor(
    private mScrollbarService: MalihuScrollbarService, private messageService: MessageService
  ) {     
    this.uploadDataDropDown = [
      {name: 'Select'},
      {name: 'Liability Insurance (2)'},
      {name: 'Accuracy Form'},
      {name: 'CMS Certificates (1)'},
      {name: 'Other Documents'},
    ];
  }
  uploadData = [{
      "type":"Word",
      "Name":"Sara-Jones-App",
      "View": true,
      "Delete":true,
      "New": true
    },
    {
      "type":"Excel",
      "Name":"Bob-Micheal-Form",
      "View": true,
      "Delete":true,
      "New": false
    },
    {
      "type":"PDF",
      "Name":"Bob-Micheal-Form",
      "View": true,
      "Delete":true,
      "New": false
    },
    {
      "type":"Word",
      "Name":"Sara-Jones-App",
      "View": true,
      "Delete":true,
      "New": false
    },
    {
      "type":"Excel",
      "Name":"Bob-Micheal-Form",
      "View": true,
      "Delete":true,
      "New": false
    },
    {
      "type":"PDF",
      "Name":"Bob-Micheal-Form",
      "View": true,
      "Delete":true,
      "New": false
    }
  ]
  ngOnInit(): void {
  }
  uploadFile($event){
    
  }
}
