import { Component, OnInit } from '@angular/core';
import { Aboutus } from '../_models/about';
import { AboutService } from '../_services/about.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  about?:Aboutus;
  loading:boolean=false;
  constructor(private _aboutService:AboutService) { }

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
      });
  }

}
