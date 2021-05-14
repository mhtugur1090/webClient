import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product';
import { ProductService } from '../_services/product.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  products?: Product[];
  loading: boolean = false;
  constructor(private _proService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this._proService.getProducts().subscribe(
      (result) => {
        this.products = result;
        this.loading = false;
      },
      (err) => {
        this.loading = false;
      }
    );
  }
}
