import { Component, OnInit } from '@angular/core';
import { Address } from '../_models/address';
import { Contact } from '../_models/contact';
import { Phone } from '../_models/phone';
import { ContactService } from '../_services/contact.service';

@Component({
  selector: 'app-dashboard-contact',
  templateUrl: './dashboard-contact.component.html',
  styleUrls: ['./dashboard-contact.component.css'],
})
export class DashboardContactComponent implements OnInit {
  constructor(private _contactService: ContactService) {}

  contact?: Contact;
  ngOnInit() {
    this.getContact();
  }

  getContact() {
    this._contactService.getContact().subscribe((result) => {
      this.contact = result;
    });
  }

  phoneAdd(value: string) {

    var _phone = new Phone();

    _phone.phone = value;

    this.contact?.phones?.push(_phone);
  }

  addressAdd(value:string)
  {
    var _address = new Address();

    _address.address = value;

    this.contact?.addresses?.push(_address);

  }

  updateContact()
  {
    console.log("Güncelleme yapılacak !!!");
  }

  // Only Numbers with Decimals
  keyPressNumbersDecimal(event:any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }
}
