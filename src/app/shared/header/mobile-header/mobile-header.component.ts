import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent implements OnInit {
  categories = ['Hombre','Mujer','Junior','Niños','Accesorios','Ofertas' ];
  constructor() { }

  ngOnInit(): void {
  }

}
