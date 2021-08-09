import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from 'src/app/services/application-state.service';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements OnInit {
  slideHeight:string='';
  public isMobileResolution: boolean;
  slides :string[] =[];
  constructor(private applicationStateService: ApplicationStateService) { 
    this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
    if(!this.isMobileResolution){
      this.slideHeight ='450px'
      this.slides= [
        '/assets/img/carousel-desktop-main.png', 
     '/assets/img/discount-desktop.png'     
       ];
     }else{
      this.slideHeight ='300px'
      this.slides= [
        '/assets/img/new-arribal-mobile.png', 
     '/assets/img/discount-mobile.png'     
       ];
     }
   
  }

  ngOnInit(): void {
  }

}
