import { Component, OnInit } from '@angular/core';

import {LayoutService} from '../layout.service'

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  step = 'step0';
  private tID = 0;
  constructor(private LayoutService : LayoutService) { 
    this.LayoutService.changeSlideState(true)
  }
  
  lefNaveExpanded: boolean = true;
  ngOnInit(): void {}
  slideMe(){
    this.lefNaveExpanded = !this.lefNaveExpanded;
    if(this.lefNaveExpanded){
      this.LayoutService.changeSlideState(true)
    }else{
      this.LayoutService.changeSlideState(false)
    }
  }
  upstep(state){
    if(state === this.tID){
      this.step = 'step0';
      this.tID = 0;
    }else{
      this.tID = state;
      this.step = 'step'+state
    }
  }
}
