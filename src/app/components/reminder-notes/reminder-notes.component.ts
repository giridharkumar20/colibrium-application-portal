import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminder-notes',
  templateUrl: './reminder-notes.component.html',
  styleUrls: ['./reminder-notes.component.scss']
})
export class ReminderNotesComponent implements OnInit {
  public scrollbarOptions = { axis: 'y', theme: 'minimal-dark', mouseWheel:{ scrollAmount: 200 }};
  public title = 'Reminder / Notes (8)';
  childData = {
    "title" : "Reminder / Notes (8)",
    "epname": "app-reminder-notes",
    "thisYear": false,
    "all": false,
    "slectb": false,
    "viewarchives": false,
    "search": false,
    "filter": true,
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

  reminder = [
    {
      title: 'Next Premium Due on - 02/11/2019',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam',
      icon: 'fa fa-eye'
    },
    {
      title: 'ID 58259 Proposal Sanctioned',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam',
      icon: 'fa fa-eye'
    },
    {
      title: 'Next Premium Due on - 02/11/2019',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam',
      icon: 'fa fa-eye'
    },
    {
      title: 'Payment Plan - 02/11/2019',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam',
      icon: 'fa fa-eye'
    },
    {
      title: 'Next Premium Due on - 02/11/2019',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam',
      icon: 'fa fa-eye'
    },
    {
      title: 'ID 58259 Proposal Sanctioned',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam',
      icon: 'fa fa-eye'
    },
    {
      title: 'Next Premium Due on - 02/11/2019',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam',
      icon: 'fa fa-eye'
    },
    {
      title: 'Payment Plan - 02/11/2019',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam',
      icon: 'fa fa-eye'
    },
  ]

}
