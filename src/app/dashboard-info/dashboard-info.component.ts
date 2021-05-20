import { Component, OnInit } from '@angular/core';
import { Aboutus } from '../_models/about';
import { AboutService } from '../_services/about.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.css'],
})
export class DashboardInfoComponent implements OnInit {
  about: Aboutus = { message: '' };
  aboutMessage?: string;
  loading:boolean = false;
  constructor(
    private _aboutService: AboutService,
    private _alert: AlertifyService
  ) {}

  ngOnInit() {
    this.getAbout();
  }

  getAbout() {
    this.loading = true;
    this._aboutService.getAbout().subscribe((result) => {
      this.about = result;
      this.aboutMessage = result.message;
      this.loading = false;
    });
  }

  IschangeMessage(): boolean {
    if (this.aboutMessage == this.about.message) {
      return false;
    }
    return true;
  }

  updateAbout() {
    this.loading = true;

    this.about.message = this.aboutMessage;


    this._aboutService.UpdateAbout(this.about).subscribe((result) => {
      if (result) {
        this.loading = false;
        this._alert.success('Güncelleme başarılı');
      }
      else
      {
        this.loading = false;
        this._alert.error('Güncelleme başarısız');
      }
    });

  }
}
