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
  constructor(private _aboutService:AboutService) { }

  ngOnInit() {
    this.getAbout();
  }


  getAbout()
  {
    this._aboutService.getAbout().subscribe(result=>
      {
        this.about = result;
      });
  }

}
