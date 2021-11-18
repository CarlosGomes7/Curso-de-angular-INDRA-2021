import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'',
    component:AppComponent,
    children:[
      {
        path:'',
        loadChildren: () => import("./pages/inicio/inicio.module").then(m => m.InicioModule)
      },
      {
        path:'listado', 
        loadChildren: () => import("./pages/listado/listado.module").then(m => m.ListadoModule)
      },
      {
        path:'detalle', 
        loadChildren: () => import("./pages/detalle/detalle.module").then(m => m.DetalleModule)
      },
      {
        path:'login',
        loadChildren: () => import("./pages/login/login.module").then(m => m.LoginModule)
      }
    ]
  },
  { path: '**', 
    redirectTo: '', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
