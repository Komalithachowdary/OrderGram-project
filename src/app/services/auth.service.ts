import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authorized:boolean=false;
  private apiUrl="http://localhost:8800/auth"
  constructor(private http:HttpClient) { 
    
  }
  setAuthorization(value:boolean){

    this.authorized=value;
  }
  signup(userData:Object){

    return this.http.post(`${this.apiUrl}/create`,userData)
  }
  login(userData){

    return this.http.post(`${this.apiUrl}/login`,userData)
  }
  logout(){
    this.authorized=false;
  }
}
