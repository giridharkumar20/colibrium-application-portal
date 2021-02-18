import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { LayoutModule } from "./layout/layout.module";
import { UserModule } from "./user/user.module";
import { ComponentsModule } from "./components/components.module";
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {BreadcrumbModule} from 'angular-crumbs';

import { ButtonModule } from "primeng/button";
import {BadgeModule} from 'primeng/badge';
import {AccordionModule} from 'primeng/accordion';
import {ProgressBarModule} from 'primeng/progressbar';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    LayoutModule,
    UserModule,
    ComponentsModule,
    CarouselModule,
    BreadcrumbModule,
    MalihuScrollbarModule.forRoot(),
    NgxChartsModule,
    ButtonModule,
    AccordionModule,
    BadgeModule,
    ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
