import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaComponent } from './pages/lista/lista.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
   //Las rutas del sitio van aquí
   {
    path: '', 
    component: MainComponent,
    children: [
      { path: '', component: LoginComponent, pathMatch: 'full'},
      { path: 'inicio', component:  InicioComponent},
      { path: 'lista', component: ListaComponent },
      { path: 'detalle', component: DetalleComponent }
    ]
  },
//no layout routes
// { path: 'login', component: },
// otherwise redirect to home
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
