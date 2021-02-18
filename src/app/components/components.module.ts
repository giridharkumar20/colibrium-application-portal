import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ClaimStatisticComponent } from './claim-statistic/claim-statistic.component';
import { ClaimsStatusComponent } from './claims-status/claims-status.component';
import { UploadDataFileComponent } from './upload-data-file/upload-data-file.component';
import { DemographicWidgetComponent } from './demographic-widget/demographic-widget.component';
import { RecentInvoicesComponent } from './recent-invoices/recent-invoices.component';
import { RecentInviocesAdComponent } from './recent-invioces-ad/recent-invioces-ad.component';
import { ReminderNotesComponent } from './reminder-notes/reminder-notes.component';
import { SelectImagesComponent } from './select-images/select-images.component';
import { DetailedInformationComponent } from './detailed-information/detailed-information.component';
import { HealthUpdatesComponent } from './health-updates/health-updates.component';
import { LiveChatComponent } from './live-chat/live-chat.component';
import { CommonTitleComponent } from './common-title/common-title.component';
import { ModalComponent } from './modal/modal.component';
import { ApplicationComponent } from './application/application.component';
import {AccordionModule} from 'primeng/accordion';
import { ButtonModule } from "primeng/button";
import {ProgressBarModule} from 'primeng/progressbar';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TabViewModule} from 'primeng/tabview';
// import {CarouselModule} from 'primeng/carousel';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
@NgModule({
  exports: [ClaimStatisticComponent, ClaimsStatusComponent, UploadDataFileComponent, DemographicWidgetComponent, RecentInvoicesComponent, ReminderNotesComponent, SelectImagesComponent, DetailedInformationComponent, HealthUpdatesComponent, LiveChatComponent, CommonTitleComponent, ModalComponent, RecentInviocesAdComponent, ApplicationComponent],
  declarations: [ClaimStatisticComponent, ClaimsStatusComponent, UploadDataFileComponent, DemographicWidgetComponent, RecentInvoicesComponent, ReminderNotesComponent, SelectImagesComponent, DetailedInformationComponent, HealthUpdatesComponent, LiveChatComponent, CommonTitleComponent, ModalComponent, RecentInviocesAdComponent, ApplicationComponent],
  imports: [
    CommonModule,
    CarouselModule,
    MalihuScrollbarModule.forRoot(),
    AccordionModule,
    ButtonModule,
    NgxChartsModule,
    ProgressBarModule,
    ScrollPanelModule,
    TabViewModule,
    CalendarModule,
    InputTextModule,
    DropdownModule,
    FormsModule
  ]
})
export class ComponentsModule { }
