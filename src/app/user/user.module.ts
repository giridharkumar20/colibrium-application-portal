import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from "../components/components.module";
import {ProgressBarModule} from 'primeng/progressbar';
@NgModule({
  declarations: [UserComponent, DashboardComponent],
  imports: [
    CommonModule,
    NgbModule,
    UserRoutingModule,    
    ComponentsModule,
    ProgressBarModule
  ]
})
export class UserModule { }
