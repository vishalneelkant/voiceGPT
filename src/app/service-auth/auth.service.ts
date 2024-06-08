import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://api.escuelajs.co/api/v1/auth/login'; 

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string}) : Observable<any>{
    console.log("credentials :" + credentials);
    console.log("http : " + this.apiUrl);
    return this.http.post(this.apiUrl, credentials);
  }

  logout():void{
    localStorage.removeItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
  
  getToken(): string {
    return localStorage.getItem('token');
  }
  
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

}
