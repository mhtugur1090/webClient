import { Component, OnInit } from '@angular/core';
import { AdminPass } from '../_models/admin.change.pass';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css'],
})
export class AdminSettingsComponent implements OnInit {
  adminPass: AdminPass;

  constructor() {
    this.adminPass = new AdminPass();
    this.adminPass.password="";
    this.adminPass.newpassword="";
    this.adminPass.username="";
  }

  ngOnInit() {}

  updatePassword(_adminPass:AdminPass)
  {
    console.log(">>"+_adminPass.password);
    console.log(">>"+_adminPass.newpassword);
  }
}
