import { Component, OnInit, Output } from '@angular/core';
import { Address } from '../_models/address';
import { Contact } from '../_models/contact';
import { Phone } from '../_models/phone';
import { AlertifyService } from '../_services/alertify.service';
import { ContactService } from '../_services/contact.service';

@Component({
  selector: 'app-dashboard-contact',
  templateUrl: './dashboard-contact.component.html',
  styleUrls: ['./dashboard-contact.component.css'],
})
export class DashboardContactComponent implements OnInit {
  contact?: Contact;
  orginalContact: Contact = new Contact();
  isAddphoneOrAddress: boolean = false;

  saveProccess: boolean = false;

  constructor(
    private _contactService: ContactService,
    private _alert: AlertifyService
  ) {
    this.orginalContact.phones = new Array<Phone>();
    this.orginalContact.addresses = new Array<Address>();
  }

  ngOnInit() {
    this.getContact();
  }

  getContact() {
    this._contactService.getContact().subscribe((result) => {
      this.contact = result;
      this.orginalContactTemplate(result);
    });
  }

  updateContact() {
    // Güncelleme burada yapılacak

    this.saveProccess = true;
    if (this.contact != undefined) {
      this._contactService.UpdateProduct(this.contact).subscribe(
        (result) => {
          this._alert.success('İletişim bilgileri güncellendi');
          this.isAddphoneOrAddress = false;
          this.saveProccess = false;
        },
        (err) => {
          this._alert.error('Güncellenmede hata oluştu.');
          this.saveProccess = false;
        }
      );
    }
  }

  cancelButton() {
    this.contact = this.orginalContact;
    this.isAddphoneOrAddress = false;
  }

  phoneAdd(value: string) {
    if(!valueIsEmpty(value))
    {
      var _phone = new Phone();
      _phone.phone = value;
      this.contact?.phones?.push(_phone);
      this.isAddphoneOrAddress = true;
    }else
    {
      this._alert.alert("Telefon numarası giriniz");
    }

  }

  phoneDelete(_phone: Phone) {
    console.log('BURADA' + this.contact?.phones?.length);
    var phonesIndex = this.contact?.phones?.findIndex(
      (p) => p.phone == _phone.phone
    );
    console.log('index' + phonesIndex);
    if (phonesIndex != undefined) {
      this.contact?.phones?.splice(phonesIndex, 1);
    }
    this.isAddphoneOrAddress = true;
  }

  addressAdd(value: string) {
    if(!valueIsEmpty(value))
    {
      var _address = new Address();
      _address.address = value;
      this.contact?.addresses?.push(_address);
      this.isAddphoneOrAddress = true;
    }else
    {
      this._alert.alert("Adres bilgisini boş giremezsiniz");
    }

  }

  addressDelete(_address: Address) {
    var addressIndex = this.contact?.addresses?.findIndex(
      (a) => a.address == _address.address
    );

    if (addressIndex != undefined) {
      this.contact?.addresses?.splice(addressIndex, 1);
    }
    this.isAddphoneOrAddress = true;
  }

  orginalContactTemplate(result: Contact) {

    this.orginalContact.email = result.email;
    this.orginalContact.instagram = result.instagram;
    this.orginalContact.facebook = result.facebook;
    this.orginalContact.twitter = result.twitter;

    result.phones?.forEach((element) => {
      this.orginalContact.phones?.push(<Phone>element);
    });

    result.addresses?.forEach((element) => {
      this.orginalContact.addresses?.push(<Address>element);
    });
  }

  // Only Numbers with Decimals
  keyPressNumbersDecimal(event: any) {
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }
}
function valueIsEmpty(value: string): boolean {
  if (value === '') return true;
  return false;
}
