import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './pages/lista/lista.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { AgregarComponent } from './pages/agregar/agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetalleComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
