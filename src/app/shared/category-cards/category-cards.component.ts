import { Component, OnInit } from '@angular/core';
import { CategoryTile } from 'src/app/interfaces/category-tile.model';
import { ApplicationStateService } from 'src/app/services/application-state.service';

@Component({
  selector: 'app-category-cards',
  templateUrl: './category-cards.component.html',
  styleUrls: ['./category-cards.component.scss']
})
export class CategoryCardsComponent implements OnInit {
  tiles: CategoryTile[]=[];
  public isMobileResolution: boolean;

  constructor(private applicationStateService: ApplicationStateService) {     
    this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
    if(!this.isMobileResolution){
     this.tiles = [
        { cols: 2, rows: 2, img: '/assets/img/childen-fashion.png'},
        { cols: 2, rows: 2, img: '/assets/img/protection.png'}
      ];
    }else{
      this.tiles = [
        { cols: 4, rows: 2, img: '/assets/img/childen-fashion.png'},
        { cols: 4, rows: 2, img: '/assets/img/protection.png'}
      ];
    }
  }

  ngOnInit(): void {
  }

}
