import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../_models/product';
import { ProductService } from '../_services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.css'],
})
export class AdminProductEditComponent implements OnInit {
  product?: Product;
  files: any;
  imgPath?:string;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location:Location
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProduct(this.route.snapshot.params['id']).subscribe(
      (result) => {
        this.product = result;
        this.imgPath = this.product.image?.path;
        console.log(this.product);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  UploadFile(files: any)
  {
    if(files.length === 0)
    {
      return;
    }
    let fileToUpload = <File>files[0];
    this.imgPath = fileToUpload.name;
    //TODO: upload servisini çağır.
  }

  cancelButton()
  {
    this.location.back();
  }

}
