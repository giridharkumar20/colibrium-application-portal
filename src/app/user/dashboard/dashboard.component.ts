import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {LayoutService} from '../../layout/layout.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  leftExpand: boolean = true;
  closeNotification = true;
  closeResult = '';
  compName;
  
  @ViewChild('cardModal') cardModal;

  constructor(
    private LayoutService : LayoutService, 
    private modalService: NgbModal
  ) {
    this.LayoutService.currentSlideState.subscribe(data => {
      this.leftExpand = data;
    });
    this.LayoutService.modalNameState.subscribe(data => {
      this.compName = data;
    });
    this.LayoutService.expandModalState.subscribe(state => {
      if(state){
        this.modalService.open(this.cardModal, { size: 'xl' });
      }else{
        this.getDismissReason('Close click');
        // alert('Close');
      }
    })
  }
  closeNotificationFunc (){
    this.closeNotification = false
  }
  ngOnInit(): void {}

  openModal(cardModal){
    this.modalService.open(cardModal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
