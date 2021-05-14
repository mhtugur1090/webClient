import { Component, OnInit } from '@angular/core';
import { Contact } from '../_models/contact';
import { ContactService } from '../_services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _contactService:ContactService) { }

  contact?:Contact;
  loading:boolean=false;
  ngOnInit() {
    this.getContact();

  }

  getContact()
  {
    this.loading = true;
    this._contactService.getContact().subscribe(result=>
      {
        this.contact = result;
        this.loading = false;
        console.log(">>>"+this.contact.email);
      },err=>
      {
        this.loading = false;
      });
  }
}
