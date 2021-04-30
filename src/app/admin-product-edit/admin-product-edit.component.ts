import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../_models/product';
import { ProductService } from '../_services/product.service';
import { Location } from '@angular/common';
import { UploadService } from '../_services/upload.service';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.css'],
})
export class AdminProductEditComponent implements OnInit {
  product?: Product;
  public respone: any = { dbPath: '' };
  public serverPath:string="http://localhost:5000/";

  imChange?:string;
  imgChangeFlag:boolean=false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProduct(this.route.snapshot.params['id']).subscribe(
      (result) => {
        this.product = result;
        this.imChange = this.product.image?.path;
      },
      (err) => {
        console.log(err);
      }
    );
  }


  cancelButton() {
    this.location.back();
  }

  submitForm() {



  }
  uploadedImg(event: any) {

    this.respone = event;
    this.serverPath +=this.respone.dbPath+"";
    if(this.product && this.product.image)
    {
      this.product.image.path = this.serverPath;
      if(this.imChange === this.serverPath)
      {
        this.imgChangeFlag=false;
      }else
      {
        this.imgChangeFlag=true;
      }

    }
  }

}
