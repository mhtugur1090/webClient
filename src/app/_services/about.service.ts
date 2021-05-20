import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aboutus } from '../_models/about';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Content-Type':'application/json'
    }),
  };
  //https://sahinkerestewebapi.me
  //http://localhost:5000/
  private rootUrl:string = "https://sahinkerestewebapi.me";
  private baseUrl: string = this.rootUrl+'/about';
  constructor(private http: HttpClient) {}

  getAbout(): Observable<Aboutus> {
    return this.http.get<Aboutus>(this.baseUrl);
  }

  //Deneme-----------------------------------

  UpdateAbout(_about: Aboutus): Observable<Aboutus> {
    return this.http.post<Aboutus>(this.baseUrl, _about, this.httpOptions);
  }

  //-----------------------------------------

  getHeaderAuth() {}
}
