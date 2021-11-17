import { Component, OnInit } from '@angular/core';
import { EstadoService } from 'src/app/servicios/estado.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  userNivel="";
  constructor(private _estado:EstadoService) { }

  ngOnInit() {
  }
  

  nivelUser(){
    this._estado.setLevelUser(this.userNivel);
  }
}
