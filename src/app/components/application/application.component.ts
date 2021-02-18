import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface FacilityWaived {
  name: string,
}
interface PreAccuranceAvg {
  name: string,
}
interface BoardCertiStatus {
  name: string,
}
interface AggregateCoverage {
  name: string,
}
interface AggregateCoverage2 {
  name: string,
}
interface BoardCertiStatus2 {
  name: string,
}
interface PrevilageType {
  name: string,
}
interface PrevilageType2 {
  name: string,
}
interface Education {
  name: string,
}
interface DoctorType {
  name: string,
}
interface DoctorType2 {
  name: string,
}
interface licenceState {
  name: string,
}
@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  providers: [MessageService],
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  activeState: boolean[] = [true, false, false];
  activeIndex: number = 0;
  responsiveOptions;
  doctorType: DoctorType[];
  doctorType2: DoctorType2[];
  selectedLicenceState: licenceState;
  licenceState: licenceState[];
  selectedDoctor: DoctorType;
  selectedDoctor2: DoctorType2;
  qualifation: Education[];
  selectedFacilityWaived: Education;
  facilityWaived: FacilityWaived[]
  selectedQualifation: Education;
  previlageType: PrevilageType[]
  selectedPrevilageType: Education;
  previlageType2: PrevilageType[]
  selectedPrevilageType2: Education;
  boardCertiStatus: BoardCertiStatus[]
  selectedBoardCertiStatus: BoardCertiStatus;
  boardCertiStatus2: BoardCertiStatus2[]
  selectedBoardCertiStatus2: BoardCertiStatus2;
  aggregateCoverage: AggregateCoverage[]
  selectedAggregateCoverage: AggregateCoverage;
  aggregateCoverage2: AggregateCoverage2[]
  selectedAggregateCoverage2: AggregateCoverage2;
  preAccuranceAvg: PreAccuranceAvg[]
  selectedPreAccuranceAvg: PreAccuranceAvg;
  customOptions: OwlOptions = {
    loop: false,
    dots: true,
    autoWidth:true,
    margin:40,
    autoHeight: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 2
      }
    },
    nav: false
  }
  constructor(private messageService: MessageService) { 
    this.qualifation = [
      {name: 'SSC'},
      {name: 'HSC'},
    ];
    this.aggregateCoverage = [
      {name: '8 M'}
    ];
    this.aggregateCoverage2 = [
      {name: '2 M'}
    ];
    this.preAccuranceAvg = [
      {name: '< 1 M'}
    ];
    this.boardCertiStatus = [
      {name: 'Active'},
      {name: 'Requested'}
    ];
    this.boardCertiStatus2 = [
      {name: 'Requested'},
      {name: 'Active'},
    ];
    this.facilityWaived = [
      {name: 'No'},
      {name: 'Yes'},
    ];
    this.previlageType = [
      {name: 'Admiting'},
      {name: 'Visiting Consultant'},
    ];
    this.previlageType2 = [
      {name: 'Visiting Consultant'},
      {name: 'Admiting'},
    ];
    this.doctorType = [
      {name: 'Medical Doctor'},
      {name: 'Acupuncturist'}
    ];
    this.doctorType2 = [
      {name: 'Acupuncturist'},
      {name: 'Medical Doctor'},
    ];
    this.licenceState = [
      {name: 'New York'},
      {name: 'India'},
    ];
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  childData = {
    "title" : "Application",
    "epname": "app-claim-statistic",
    "progressBar": true,
    "slectb": true,
    "refresh": true,
    "expand": true,
    "drag": true,
  }
  ngOnInit(): void {
  }
  onTabClose(event) {
    this.messageService.add({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index})
  }

  onTabOpen(event) {
    this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
  }

  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }

}
