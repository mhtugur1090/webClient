import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  private rootUrl:string = "https://sahinkerestewebapi.me";
  private baseUrl: string = this.rootUrl+'/product/';
  product?: Product[];
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + id);
  }


  // Deneme------------------------------------------------

  UpdateProduct(_product:Product):Observable<Product>
  {
    return this.http.post<Product>(this.baseUrl+"update",_product,this.httpOptions);
  }

  deleteProduct(_product: Product): Observable<Product> {
    return this.http.post<Product>(
      this.baseUrl + "delete",_product,
      this.httpOptions
    );
  }
  //------------------------------------------------------

  postProduct(_product: Product): Observable<Product> {
    return this.http.post<Product>(
      this.baseUrl + 'add',
      _product,
      this.httpOptions
    );
  }


}
