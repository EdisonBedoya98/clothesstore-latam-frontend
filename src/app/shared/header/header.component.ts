import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationStateService } from 'src/app/services/application-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isMobileResolution: boolean;
  public value = '';

  constructor(private applicationStateService: ApplicationStateService,private router: Router) {
    this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
   }

  ngOnInit(): void {
  }

}
