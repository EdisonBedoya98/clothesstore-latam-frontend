import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationStateService } from './services/application-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clothesstore-latam';
  public isMobileResolution: boolean;

  constructor(private applicationStateService: ApplicationStateService,private router: Router) {
    this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
   }
 
}
