import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.scss']
})
export class LiveChatComponent implements OnInit {
  public scrollbarOptions = { axis: 'y', theme: 'minimal-dark', mouseWheel:{ scrollAmount: 200 }};
  childData = {
    "title" : "Live Chat",
    "epname": "app-live-chat",
    "thisYear": false,
    "all": false,
    "slectb": false,
    "viewarchives": false,
    "search": false,
    "filter": false,
    "refresh": true,
    "floppy": true,
    "donload": false,
    "chart": false,
    "expand": true,
    "drag": true,
  }
  constructor() { }
  ngOnInit(): void {
  }

  liveChat = [
    {
      virtualAssistant: 'Virtual Assistant',
      para: 'Hello. Please let me know if you have any questions! I am here to help you.',
      me: 'Me',
      mePara: 'Yes. I am trying to locate patients record.',
    },
    {
      virtualAssistant: 'Virtual Assistant',
      para: 'Hello. Please let me know if you have any questions! I am here to help you.',
      me: 'Me',
      mePara: 'Yes. I am trying to locate patients record.',
    },
    {
      virtualAssistant: 'Virtual Assistant',
      para: 'Hello. Please let me know if you have any questions! I am here to help you.',
      me: 'Me',
      mePara: 'Yes. I am trying to locate patients record.',
    },
    {
      virtualAssistant: 'Virtual Assistant',
      para: 'Hello. Please let me know if you have any questions! I am here to help you.',
      me: 'Me',
      mePara: 'Yes. I am trying to locate patients record.',
    },
    {
      virtualAssistant: 'Virtual Assistant',
      para: 'Hello. Please let me know if you have any questions! I am here to help you.',
      me: 'Me',
      mePara: 'Yes. I am trying to locate patients record.',
    },
    {
      virtualAssistant: 'Virtual Assistant',
      para: 'Hello. Please let me know if you have any questions! I am here to help you.',
      me: 'Me',
      mePara: 'Yes. I am trying to locate patients record.',
    },
  ]

}
