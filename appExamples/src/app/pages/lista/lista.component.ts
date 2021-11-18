import { Component, OnInit } from '@angular/core';
import { ConsumirHttpService } from 'src/app/servicios/consumir-http.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
people: any[] = [];
usuario: any[] =
[
  {'nombre':'Pepe','apellido':'Gomes','edad':20 , 'img': 'https://picsum.photos/seed/picsum/200/300'},
  {'nombre':'Juan','apellido':'Hurtado','edad':30, 'img': 'https://picsum.photos/seed/picsum/200/300'},
  {'nombre':'Carlos','apellido':'Peaspan','edad':40, 'img': 'https://picsum.photos/seed/picsum/200/300'}
]

  constructor(private consumir:ConsumirHttpService) { }

  ngOnInit(): void {
  }

  getPeopleHttp(){
    this.consumir.getPeople().subscribe((resp:any)=>{
      console.log(resp);
      this.people = resp;
    });
  }

  agregarUsuario(data:any){
    console.log(data);
    this.consumir.postAgregarUsuario(data).subscribe(
      resp=>{
      console.log(resp);
      },
      error =>{
        console.log(error);        
      });
  }


}
