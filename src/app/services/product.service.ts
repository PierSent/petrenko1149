import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyProduct } from '../shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseApi = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  addProduct(data: MyProduct) {
    return this.http.post(this.baseApi, data).toPromise();
  }

  changeProduct(data: MyProduct) {
    return this.http.put(this.baseApi + "/" + data.id, data).toPromise();
  }

  deleteProduct(data) {
    return this.http.delete(this.baseApi + "/" + data).toPromise();
  }
  
  getProducts() : Promise<any>{
    return this.http.get(this.baseApi).toPromise();
  }

}
