import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { People } from 'src/app/Interfaces/people';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit, OnChanges {
  @Input() people: any;
  @Output() newItemEvent = new EventEmitter<People>();
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.nombreDePeople = this.people.nombre;
     console.log(this.people);
  }

  // pasar evento al padre por un output
  enviarNombreAlComponentePadre(){
    this.newItemEvent.emit(this.people);

  }
}
