import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EstadoService } from '../servicios/estado.service';

@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {
  nivelUsuario="";
  path="";
  constructor(
    private _estado:EstadoService, 
    private roter:Router){
      this._estado.nivelUser.subscribe(resp=>{
        this.nivelUsuario = resp;
      });
    }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.path = route.url[0].path;

    // de esta forma obtenemos la url
    console.log(route.url[0].path);

    switch (this.nivelUsuario) {
      case '1':
        if (this.path === 'lista' || this.path === 'detalle') {
          return true;
        } else {
          return false;
        }        
        break;
      case '2':
        if (this.path === 'lista') {
          return true;
        } else {
          return false;
        }
        break;
      case '3':
        return false;
        break;
      default:
        return true;
        break;
    }
  


  }
  
}
