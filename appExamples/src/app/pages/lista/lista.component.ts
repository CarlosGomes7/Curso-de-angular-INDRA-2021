import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/Interfaces/people';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {
  people: People[] = [
    {
      nombre: 'Domeniga',
      apellido: 'Kenwin',
      ciudad: 'Frontignan',
      email: 'dkenwin0@about.com',
      avatar:
        'https://robohash.org/necessitatibusetsit.jpg?size=50x50&set=set1',
      sueldo: '€1321,10',
    },
    {
      nombre: 'Simeon',
      apellido: 'Cortese',
      ciudad: 'Añatuya',
      email: 'scortese1@netlog.com',
      avatar:
        'https://robohash.org/inventorevoluptasdebitis.jpg?size=50x50&set=set1',
      sueldo: '€1045,28',
    },
    {
      nombre: 'Vally',
      apellido: 'Purslow',
      ciudad: 'Kallífytos',
      email: 'vpurslow2@reverbnation.com',
      avatar: 'https://robohash.org/impeditomnisqui.bmp?size=50x50&set=set1',
      sueldo: '€1866,32',
    },
    {
      nombre: 'Koral',
      apellido: 'Reichartz',
      ciudad: 'Adolfo Lopez Mateos',
      email: 'kreichartz3@unc.edu',
      avatar: 'https://robohash.org/solutaeumet.bmp?size=50x50&set=set1',
      sueldo: '€1558,29',
    },
    {
      nombre: 'Sinclair',
      apellido: 'Longdon',
      ciudad: 'Severo-Yeniseyskiy',
      email: 'slongdon4@upenn.edu',
      avatar: 'https://robohash.org/asperioressitnemo.bmp?size=50x50&set=set1',
      sueldo: '€1772,08',
    },
    {
      nombre: 'Camilla',
      apellido: 'Hutchin',
      ciudad: 'Montongtebolak',
      email: 'chutchin5@discuz.net',
      avatar: 'https://robohash.org/suntbeataevelit.bmp?size=50x50&set=set1',
      sueldo: '€1571,25',
    },
    {
      nombre: 'Sol',
      apellido: 'Johncey',
      ciudad: 'Qiaodi',
      email: 'sjohncey6@mac.com',
      avatar:
        'https://robohash.org/occaecatinemoinventore.bmp?size=50x50&set=set1',
      sueldo: '€1840,59',
    },
  ];
  selectedPeople: any = {};
  
  constructor() { }

  ngOnInit(): void {
  }

  // obtengo item de la lista y lo envio al hijo atravez del input
  getItem(e: any) {
    console.log(e);
    this.selectedPeople = e;
  }

  mostrarNombreSeleccionado(e:People){
    alert(e.nombre);
    // Eliminar un objeto de un array
    let i = this.people.findIndex(x => x.nombre === e.nombre); // obtenemos el indice

    this.people.splice(i, 1)[0]; //remover indice elemento let i
  }

}
