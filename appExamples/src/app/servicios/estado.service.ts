import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  private currentUserSubject: BehaviorSubject<string> = new BehaviorSubject('' as string);
  public readonly currentUser: Observable<string> = this.currentUserSubject.asObservable();

  constructor() { }

  setCurrentUser(currentUser: string): void {
    this.currentUserSubject.next(currentUser);
  }

}
