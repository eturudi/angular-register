import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { https } from 'firebase-functions/v1';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) {  }

  baseServerUrl="https://localhost:44380/api/";

  registerUser(user: Array<String>){
   return this.http.post(this.baseServerUrl + "Test/SaveUser", {
    FirstName:user[0],
    lastName:user[1],
    Email:user[2],
    Mobile:user[3],
    Gender:user[4],
    
   }, 
   {
     responseType:'text'
   });
  }
}

