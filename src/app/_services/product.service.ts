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

  private baseUrl: string = 'http://localhost:5000/product/';
  product?: Product[];
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + id);
  }

  putProduct(_product: Product): Observable<Product> {
    return this.http.put<Product>(
      this.baseUrl + _product.id,
      _product,
      this.httpOptions
    );
  }

  postProduct(_product: Product): Observable<Product> {
    return this.http.post<Product>(
      this.baseUrl + 'add',
      _product,
      this.httpOptions
    );
  }

  deleteProduct(_product: Product): Observable<Product> {
    return this.http.delete<Product>(
      this.baseUrl + _product.id,
      this.httpOptions
    );
  }
}
