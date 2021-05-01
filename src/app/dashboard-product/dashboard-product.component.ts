import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-dashboard-product',
  templateUrl: './dashboard-product.component.html',
  styleUrls: ['./dashboard-product.component.css']
})
export class DashboardProductComponent implements OnInit {

  products?:Product[];
  constructor(private _proService:ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts()
  {
    this._proService.getProducts().subscribe(products=>
      {
        this.products = products;
      });
  }

}
