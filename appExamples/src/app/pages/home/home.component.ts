import { Component, OnInit } from '@angular/core';
import { EstadoService } from 'src/app/servicios/estado.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _estadoService: EstadoService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this._estadoService.setCurrentUser("hola mundo eeeee");
    },5000);


    this._estadoService.currentUser.subscribe(resp=> {
      console.log("resp del observable: "+resp);
    });
  }

}
