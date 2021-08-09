import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl =environment.apiUrl;
   }

   getProductsByCategory(limit:number) {
    return this.http.get<any>(this.apiUrl+'sites/MCO/search?category=MCO1430&attributes=results&limit'+limit);
  }
  getProductsByQuery(query:string) {
    return this.http.get<any>(this.apiUrl+'sites/MCO/search?category=MCO1430&q='+query+'&attributes=results');
  }
}
