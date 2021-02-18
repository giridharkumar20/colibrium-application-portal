import { Component, OnInit, Input } from '@angular/core';

import {LayoutService} from '../../layout/layout.service'

import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-common-title',
  templateUrl: './common-title.component.html',
  providers: [MessageService],
  styleUrls: ['./common-title.component.scss']
})
export class CommonTitleComponent implements OnInit {
  @Input() childData: Array<any>;
  public frmParent: any;
  modalState = false;
  constructor(private LayoutService : LayoutService) {
    this.LayoutService.changeexpandModalState(this.modalState)
   }

  ngOnInit(): void {
    this.frmParent = this.childData
    // console.log(this.frmParent)
  }
  expand(cName){
    this.modalState = true;
    this.LayoutService.changemodalNameState(cName);
    this.LayoutService.changeexpandModalState(this.modalState);
  }
  compress(cName){
    this.modalState = false;
    this.LayoutService.changemodalNameState(cName);
    this.LayoutService.changeexpandModalState(this.modalState);
  }
}
