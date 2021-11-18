import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const headers : any = new HttpHeaders(
  {'Content-Type':'application/json'}
);

@Injectable({
  providedIn: 'root'
})

export class ConsumirHttpService {
  constructor(private http: HttpClient) { }

  getPeople(){
    return this.http.get('https://run.mocky.io/v3/5fdfd623-2b8d-4508-926b-44502291cd06');
  }

  postAgregarUsuario(data:any){
    // https://run.mocky.io/v3/d1ee1ea0-58fe-4d8d-a863-a37fbfe2f4da
    return this.http.post('https://run.mocky.io/v3/32f58da4-394c-4a0e-8aa2-b35109209c0b',data);
  }

}
