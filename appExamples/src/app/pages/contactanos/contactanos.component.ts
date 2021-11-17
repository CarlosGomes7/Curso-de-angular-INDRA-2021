import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EstadoService } from 'src/app/servicios/estado.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})

export class ContactanosComponent implements OnInit {
  private estadoServiceSubscription: Subscription | undefined;
  
  constructor(private _estado: EstadoService) { }

  ngOnInit(): void {
    this.estadoServiceSubscription = this._estado.currentUser.subscribe(resp=>{
      console.log("subscribe desde la vista de contactanos: "+resp);
    });
  }
 
  ngOnDestroy(): void {
    this.estadoServiceSubscription?.unsubscribe();
  }

}
