import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product';
import { AlertifyService } from '../_services/alertify.service';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-dashboard-product',
  templateUrl: './dashboard-product.component.html',
  styleUrls: ['./dashboard-product.component.css'],
})
export class DashboardProductComponent implements OnInit {
  products?: Product[];
  constructor(
    private _proService: ProductService,
    private _alert: AlertifyService
  ) {}

  willDeleteProduct?: Product;

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this._proService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  deleteProduct(delPro: Product) {
    console.log('Silincecek ürün id si: ' + delPro.id);

    this._proService.deleteProduct(delPro).subscribe((result) => {
      var index = this.products?.indexOf(result);
      if(index!=undefined)
      {
        this.products?.splice(index,1);
      }
      this._alert.warning('Ürün : ' + result.name + ' silindi');
    });
  }
}
