import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminPass } from '../_models/admin.change.pass';

@Injectable({
  providedIn: 'root',
})
export class AdminService {

  httpOptions=
  {
    headers: new HttpHeaders(
      {
        'Authorization': 'Bearer '+localStorage.getItem('token')
      })
  }

  private baseUrl: string = 'http://localhost:5000/admin/repassword/';

  constructor(private http: HttpClient) {}

  changePassword(admin: AdminPass): Observable<AdminPass> {

    return this.http.put<AdminPass>(this.baseUrl,admin, this.httpOptions);
  }
}
