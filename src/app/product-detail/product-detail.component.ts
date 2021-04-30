import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../_models/product';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product?:Product;
  constructor(private productService:ProductService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct()
  {
this.productService.getProduct(this.route.snapshot.params["id"]).subscribe(result=>
  {
    this.product = result;
  },err=>
  {
    console.log(err);
  });
  }

}
