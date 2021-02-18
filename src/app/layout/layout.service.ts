import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public slideState = new BehaviorSubject<boolean>(null);
  public currentSlideState = this.slideState.asObservable();
  changeSlideState(slide){
    this.slideState.next(slide);
  };
  leftPanel = new BehaviorSubject<boolean>(null);
  leftPanelState = this.leftPanel.asObservable();
  changeleftPanelState(slide){
    this.leftPanel.next(slide);
  };

  expandModal = new BehaviorSubject<boolean>(null);
  expandModalState = this.expandModal.asObservable();
  changeexpandModalState(stat){
    this.expandModal.next(stat);
  };
  modalName = new BehaviorSubject<string>(null);
  modalNameState = this.modalName.asObservable();
  changemodalNameState(name){
    this.modalName.next(name);
  };
}