import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {


  baseUrl : string ="http://localhost:5000/auth/";
  _jwtHelper = new JwtHelperService();
  _decodedToken:any={unique_name:"",nameid:""};
  private _http:HttpClient;

constructor(http: HttpClient,private router:Router) { this._http = http; }

login(model:any)
{
  return this._http.post<any>(this.baseUrl+"login",model).pipe(
    map((result:any)=>{

      if(result)
      {
        localStorage.setItem("token",result.token);
        this._decodedToken = this._jwtHelper.decodeToken(result.token);
      }
    }
    )
  );
}

loggedIn():boolean
{
  const token = localStorage.getItem("token");
  if(!token)
  {
    return false;
  }
  return !this._jwtHelper.isTokenExpired(token);
}

logout()
{

  localStorage.removeItem("token");
  this.router.navigate([""]);

}

}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate//herhangi bir linkin aktif olup olmama özelliğini ize getircek olan bir interface.
{

  constructor(private _authService:AuthService) {


  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this._authService.loggedIn();
  }

}
