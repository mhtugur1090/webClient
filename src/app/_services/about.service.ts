import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aboutus } from '../_models/about';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private baseUrl: string = 'http://localhost:5000/about/';
  constructor(private http: HttpClient) {}

  getAbout(): Observable<Aboutus> {
    return this.http.get<Aboutus>(this.baseUrl);
  }

  putAbout(_about: Aboutus): Observable<Aboutus> {
    return this.http.put<Aboutus>(this.baseUrl, httpOptions);
  }
}
