import { Component, OnInit } from '@angular/core';
import { Image } from '../_models/Image';
import { Product } from '../_models/product';
import { AlertifyService } from '../_services/alertify.service';
import { ProductService } from '../_services/product.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.css'],
})
export class AdminProductAddComponent implements OnInit {
  product: Product;
  public respone: any = { dbPath: '' };
  public serverPath: string = 'http://localhost:5000/';
  stokChange: boolean = false;

  constructor(
    private _productService: ProductService,
    private _alert: AlertifyService,
    private _locationa: Location
  ) {
    this.product = new Product();
    this.product.image = new Image();
  }

  ngOnInit() {}

  submitForm() {
    this._productService.postProduct(this.product).subscribe(
      (result) => {
        this._alert.success('Yeni ürün başarıyla eklendi');
        this._locationa.back();
      },
      (err) => {
        this._alert.error('Ürün ekleme başarısız!');
      }
    );
  }

  uploadedImg(event: any) {
    this.respone = event;
    this.serverPath += this.respone.dbPath + '';
    if (this.product.image?.path != undefined) {
      this.product.image.path = this.serverPath;
    }
  }

  onItemChange(value: boolean) {
    console.log(value);
    if (this.product) {
      this.product.active = value;
      this.stokChange = true;
    }
  }
}
