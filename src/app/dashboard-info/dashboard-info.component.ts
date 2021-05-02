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
  constructor(
    private _aboutService: AboutService,
    private _alert: AlertifyService
  ) {}

  ngOnInit() {
    this.getAbout();
  }

  getAbout() {
    this._aboutService.getAbout().subscribe((result) => {
      this.about = result;
      this.aboutMessage = result.message;
    });
  }

  IschangeMessage(): boolean {
    if (this.aboutMessage == this.about.message) {
      return false;
    }
    return true;
  }

  updateAbout() {
    this.about.message = this.aboutMessage;
    this._aboutService.putAbout(this.about).subscribe((result) => {
      if (result) {
        this._alert.success('Güncelleme başarılı');
      }
      else
      {
        this._alert.error('Güncelleme başarısız');
      }
    });
  }
}
