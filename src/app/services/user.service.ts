import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient, private router: Router) { }

  signUp(userObj:any) {
    return this.http.post<any>(`${this.baseUrl}/user/register`, userObj);
  }

  login(loginObj: any) {
    return this.http.post<any>(`https://localhost:7031/login`, loginObj);
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['login'])
  }
  
  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
