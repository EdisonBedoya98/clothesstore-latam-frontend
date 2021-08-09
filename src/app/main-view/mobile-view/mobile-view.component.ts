import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.scss']
})
export class MobileViewComponent implements OnInit {
  categories = ['Hombre','Mujer','Junior','Niños','Accesorios','Ofertas' ];
  products:Product[]=[];
  constructor(productService:ProductService) { 
    productService.getProductsByCategory(1).subscribe((data:any)=>{
      this.products =data["results"];  
    });
  }

  ngOnInit(): void {
  }

}
