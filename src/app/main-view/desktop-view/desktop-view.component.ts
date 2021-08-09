import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-desktop-view',
  templateUrl: './desktop-view.component.html',
  styleUrls: ['./desktop-view.component.scss']
})
export class DesktopViewComponent implements OnInit {
  products:Product[]=[];
  isSearchText:boolean = false;
  // productsFiltered:Product[]=[];
  productService:ProductService;
  constructor(productService:ProductService) { 
    this.productService =productService;
    this.productService.getProductsByCategory(4).subscribe((data:any)=>{
      this.products =data["results"];
    
    
    
    });
  }

  ngOnInit(): void {
    
  }
  processPropagate(searchText:string) {
    this.isSearchText =true;
    this.productService.getProductsByQuery(searchText).subscribe((data:any)=>{
      this.products =data["results"];  
    
    
    });
    console.log('desde el padre '+searchText)
  }
  

}
