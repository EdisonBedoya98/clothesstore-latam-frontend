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
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryCardsComponent } from './category-cards/category-cards.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
@NgModule({
  declarations: [
    HeaderComponent,
    CategoriesComponent,
    MobileHeaderComponent,
    DesktopHeaderComponent,
    SearchBarComponent,
    CategoryCardsComponent,
    ProductCardComponent,
    ProductsListComponent,
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
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [
    CategoriesComponent,
    MatToolbarModule,
    MobileHeaderComponent,
    DesktopHeaderComponent,
    MainCarouselComponent,
    CategoryCardsComponent,
    ProductCardComponent,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    SearchBarComponent,
    ProductsListComponent
  ]
})
export class SharedModule { }
