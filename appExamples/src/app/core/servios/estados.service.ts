import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  private detailMascotaSubject: BehaviorSubject<any> = new BehaviorSubject({} as any);
  public readonly detailMascota: Observable<any> = this.detailMascotaSubject.asObservable();

  constructor() { }

  insertarMascota(data: any): void {
    console.log("insertarMascota");    
    this.detailMascotaSubject.next(data);
  }

}
