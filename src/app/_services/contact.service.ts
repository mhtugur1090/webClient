import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../_models/contact';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root',
})
export class ContactService {


 httpOptions=
{
  headers: new HttpHeaders(
    {
      'Authorization': 'Bearer '+localStorage.getItem('token')
    })
}

  private rootUrl:string = "https://sahinkerestewebapi.me";
  private baseUrl: string = this.rootUrl+'/contact/';

  constructor(private http: HttpClient) {}

  getContact(): Observable<Contact> {
    return this.http.get<Contact>(this.baseUrl);
  }
  putProduct(_contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(this.baseUrl + _contact.id, _contact,this.httpOptions);
  }

}
