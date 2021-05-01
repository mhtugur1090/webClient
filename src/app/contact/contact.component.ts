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
  ngOnInit() {
    this.getContact();

  }

  getContact()
  {
    this._contactService.getContact().subscribe(result=>
      {
        this.contact = result;
        console.log(">>>"+this.contact.email);
      });
  }
}
