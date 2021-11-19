import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TiendaService } from 'src/app/core/serviciosHttp/tienda.service';
import { EstadosService } from 'src/app/core/servios/estados.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  listadoMascotas : any[] = [];

  constructor(
    private _tienda: TiendaService, 
    private route: Router,
    private estados : EstadosService) { }

  ngOnInit(): void {
    this._tienda.getListMascotas().subscribe((resp:any)=>{
      console.log(resp);
      this.listadoMascotas = resp;
    });
  }

  irDetalles(item : any){
    this.estados.insertarMascota(item);
    this.route.navigate(['/detalle']);  
  }

}
