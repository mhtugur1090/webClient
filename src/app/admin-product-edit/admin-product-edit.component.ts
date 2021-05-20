import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../_models/product';
import { ProductService } from '../_services/product.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.css'],
})
export class AdminProductEditComponent implements OnInit {
  product?: Product;
  public respone: any = { dbPath: '' };
  public serverPath: string = 'https://sahinkerestewebapi.me/';

  imChange?: string;
  imgChangeFlag: boolean = false;
  loading: boolean = false;
  stokChange: boolean = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.loading = true;
    this.productService.getProduct(this.route.snapshot.params['id']).subscribe(
      (result) => {
        this.product = result;
        this.imChange = this.product.image?.path;
        this.loading = false;
      },
      (err) => {
        this.loading = false;
        console.log(err);
      }
    );
  }

  cancelButton() {
    this.location.back();
  }

  submitForm() {
    this.loading = true;
    if (this.product)
      this.productService.UpdateProduct(this.product).subscribe(
        (result) => {
          this.loading = false;
          console.log('Güncelleme basarılı');
          //this.router.navigate(['dashboard']);
          this.location.back();
        },
        (err) => {
          this.loading = false;
          console.log('Hata>>>' + err);
        }
      );
  }
  uploadedImg(event: any) {
    this.respone = event;
    this.serverPath += this.respone.dbPath + '';

    console.log("image path:"+this.serverPath);
    console.log("prdocut:"+this.product);
    console.log("image:"+this.product?.image);

    if (this.product && this.product.image) {
      this.product.image.path = this.serverPath;

      if (this.imChange === this.serverPath) {
        this.imgChangeFlag = false;
      } else {
        this.imgChangeFlag = true;
      }
    }
  }

  onItemChange(value: boolean) {
    console.log(value);
    if (this.product) {
      this.product.active = value;
      this.stokChange = true;
      console.log("stok değişikliği:"+this.stokChange);
    }
  }
}
