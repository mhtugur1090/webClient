import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  modelform:any ={username:"",password:""}

  constructor(private _authService:AuthService,private _router:Router,private _alertify:AlertifyService) { }

  ngOnInit() {
  }

  login()
  {
    this._authService.login(this.modelform).subscribe(success=>
      {
        this._alertify.success("Giriş başarılı");
        this._router.navigate(["dashboard"]);
      },err=>
      {
        this._alertify.error("Giriş başarısız");
        this._router.navigate(["admin"]);
      });



  }

  loggedIn()
  {
    return this._authService.loggedIn();
  }

}
