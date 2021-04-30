import { Injectable } from "@angular/core";
import { Image } from "./Image";


export class Product
{

  id:number=0;
  name:string="";
  description:string="";
  category:string="";
  active:boolean=true;
  thickness:string="";
  width:string="";
  length:string="";
  usage:string="";
  image?:Image;

}
