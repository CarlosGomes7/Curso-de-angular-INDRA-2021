import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  private nivelUserSubject: BehaviorSubject<string> = new BehaviorSubject('' as string);
  public readonly nivelUser: Observable<string> = this.nivelUserSubject.asObservable();

constructor() { }

setLevelUser(currentUser: string): void {
  this.nivelUserSubject.next(currentUser);
}

}
