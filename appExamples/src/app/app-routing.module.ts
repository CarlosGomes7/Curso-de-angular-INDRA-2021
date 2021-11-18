import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { EjemploLayoutComponent } from './_layout/ejemplo-layout/ejemplo-layout.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';

const routes: Routes = [
  //Las rutas del sitio van aquí
  {
    path: '', 
    component: SiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'about', component: AboutComponent },
      { path: 'test/:id', component: AboutComponent }
    ]
  },

// Las rutas de la aplicación van aquí aquí
{ 
    path: '',
    component: AppLayoutComponent, 
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent }
    ]
},
{
  path: 'ejemplo',
  component: EjemploLayoutComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent }
  ]
},
//no layout routes
{ path: 'login', component: LoginComponent},
{ path: 'register', component: RegisterComponent },
// otherwise redirect to home
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// pathMatch: 'full' significa que toda la ruta de la URL 
// debe coincidir y es consumida por el algoritmo de coincidencia de rutas.

// pathMatch: 'prefix' es decir, se elige la primera ruta donde la ruta coincide con el inicio de la URL, 
// pero luego el algoritmo de coincidencia de rutas continúa buscando rutas secundarias coincidentes 
// donde el resto de la URL coincide.