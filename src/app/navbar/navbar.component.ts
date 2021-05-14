import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Contact } from '../_models/contact';
import { AlertifyService } from '../_services/alertify.service';
import { ContactService } from '../_services/contact.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  contact?:Contact;

  constructor(
    public _authService: AuthService,
    private router: Router,
    private _contactService:ContactService
  ) {}

  ngOnInit() {}

  logout() {
    this._authService.logout();
    this.router.navigate(['home']);

  }

  getContact()
  {
     this._contactService.getContact().subscribe(result=>
      {
        this.contact = result;
      },err=>
      {
        console.log(err);
      });
  }
}
