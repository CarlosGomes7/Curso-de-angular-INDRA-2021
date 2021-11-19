import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {


  constructor(private http: HttpClient) { }

  getListMascotas(){
    return this.http.get('https://run.mocky.io/v3/4f2c2eb0-bb1b-4582-a42e-0c5497b231ad');
  }
  
}
