import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  modelform:any ={username:"",password:""}

  constructor(private _authService:AuthService,private _router:Router) { }

  ngOnInit() {
  }

  login()
  {
    this._authService.login(this.modelform).subscribe(success=>
      {
        alert("login basarili");
        this._router.navigate(["dashboard"]);
      },err=>
      {
        alert("basarisiz");
        this._router.navigate(["admin"]);
      });



  }

  loggedIn()
  {
    return this._authService.loggedIn();
  }

}
