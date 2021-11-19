import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EstadosService } from 'src/app/core/servios/estados.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit, OnDestroy {
  detailMascota: any = {};
  private usuarioSubscription : Subscription | undefined;

  constructor(private estados : EstadosService) { }

  ngOnInit(): void {
   this.getDetails();
  }

  getDetails(){
    this.usuarioSubscription = this.estados.detailMascota.subscribe(resp=>{
      console.log(resp);
      this.detailMascota = resp;
    });
  }

  ngOnDestroy(): void {
    this.usuarioSubscription?.unsubscribe;
  }



}
