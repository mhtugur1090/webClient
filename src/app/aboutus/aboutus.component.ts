import { Component, OnInit } from '@angular/core';
import { Aboutus } from '../_models/about';
import { AboutService } from '../_services/about.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  about?:Aboutus;
  loading:boolean=false;
  constructor(private _aboutService:AboutService,private _alerty:AlertifyService) { }

  ngOnInit() {
    this.getAbout();
  }


  getAbout()
  {
    this.loading=true;
    this._aboutService.getAbout().subscribe(result=>
      {
        this.about = result;
        this.loading=false;
      },err=>
      {
        this.loading=false;
        this._alerty.error("Sorun oluşu. Daha sonra tekrar deneyiniz.");
      });
  }

}
