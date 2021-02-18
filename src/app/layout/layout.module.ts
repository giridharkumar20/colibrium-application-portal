import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DefaultComponent } from './default/default.component';
import { FooterComponent } from './footer/footer.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';


@NgModule({
  exports: [DefaultComponent, HeaderComponent, FooterComponent, LeftPanelComponent],
  declarations: [HeaderComponent, DefaultComponent, FooterComponent, LeftPanelComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
