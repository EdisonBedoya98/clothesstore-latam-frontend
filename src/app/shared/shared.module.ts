import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { MobileHeaderComponent } from './header/mobile-header/mobile-header.component';
import { DesktopHeaderComponent } from './header/desktop-header/desktop-header.component';
import { SearchBarComponent } from './header/search-bar/search-bar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import {MatListModule} from '@angular/material/list';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainCarouselComponent } from './carousels/main-carousel/main-carousel.component';
@NgModule({
  declarations: [
    HeaderComponent,
    CategoriesComponent,
    MobileHeaderComponent,
    DesktopHeaderComponent,
    SearchBarComponent,
    MainCarouselComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatCarouselModule,
    BrowserAnimationsModule
  ],
  exports: [
    CategoriesComponent,
    MobileHeaderComponent,
    DesktopHeaderComponent,
    MainCarouselComponent
  ]
})
export class SharedModule { }
