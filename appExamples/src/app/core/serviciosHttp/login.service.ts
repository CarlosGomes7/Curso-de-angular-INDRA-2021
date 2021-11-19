import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(body:any){
   return this.http.post('https://run.mocky.io/v3/32f58da4-394c-4a0e-8aa2-b35109209c0b', body);
  }

}
