import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44316/api/';

  constructor(private HttpClient:HttpClient) { }

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getall";
    return this.HttpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategoryId(categoryId:number): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getallbycategoryid?categoryid=" + categoryId;
    return this.HttpClient.get<ListResponseModel<Product>>(newPath);
  }
}
