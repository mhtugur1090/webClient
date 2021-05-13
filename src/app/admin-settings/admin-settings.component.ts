import { Component, OnInit } from '@angular/core';
import { AdminPass } from '../_models/admin.change.pass';
import { AdminService } from '../_services/admin.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css'],
})
export class AdminSettingsComponent implements OnInit {
  adminPass: AdminPass;
  loading: boolean = false;
  constructor(
    private _adminService: AdminService,
    private _alert: AlertifyService
  ) {
    this.adminPass = new AdminPass();
    this.adminPass.password = '';
    this.adminPass.newpassword = '';
    this.adminPass.username = 'admin';
  }

  ngOnInit() {}

  updatePassword(_adminPass: AdminPass) {
    this.loading = true;
    this._adminService.changePassword(this.adminPass).subscribe(
      (result) => {
        this.loading = false;
        this._alert.success('Şifre değiştirildi');
      },
      (err) => {
        this.loading = false;
        this._alert.error('şifre değiştirilemedi!');
      }
    );
  }
}
