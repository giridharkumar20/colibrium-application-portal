import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showAdmin = false;
  public showFev = false;
  
  showAdminToggle() {
    this.showAdmin = !this.showAdmin;
  }
  showFevToggle() {
    this.showFev = !this.showFev;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
