import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopViewComponent } from './desktop-view/desktop-view.component';
import { SharedModule } from '../shared/shared.module';
import { MobileViewComponent } from './mobile-view/mobile-view.component';



@NgModule({
  declarations: [
    DesktopViewComponent,
    MobileViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],  
  exports: [DesktopViewComponent,MobileViewComponent]
})
export class MainViewModule { }
