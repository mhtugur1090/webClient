import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

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
