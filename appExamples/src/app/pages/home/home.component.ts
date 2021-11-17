import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hoyFecha = new Date();
  dinero = 123123;
  nombre = "CarlOs";

  constructor() { }

  ngOnInit(): void {
    this.agregar();
  }

  agregar(){
    this.nombre = `Sr.  ${this.nombre}`;
  }

}
