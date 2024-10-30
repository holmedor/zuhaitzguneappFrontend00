import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router" ;
import { Route} from "@angular/router" ;

import { AboutComponent } from "./about/about.component";
import { ContactoComponent } from "./contacto/contacto.component";
//import { HomeComponent } from "./home/home.component";
import { ServiciosComponent } from "./servicios/servicios.component";
import { InicioComponent } from "./inicio/inicio.component";
import { LoginComponent } from "./login/login.component";
import { MapaComponent } from "./mapa/mapa.component";
import { PerfilComponent } from "./perfil/perfil.component";
import { TareasComponent } from "./tareas/tareas.component";
import { TarjetasComponent } from "./tarjetas/tarjetas.component";
import { ArbolComponent } from "./arbol/arbol.component";
import { AyudaComponent } from "./ayuda/ayuda.component";
import { AccesoComponent } from "./acceso/acceso.component";
import { DatosComponent } from "./datos/datos.component";
import { ArbolesComponent } from "./arboles/arboles.component";

//rutas de la página web
const appRoutes: Routes = [
{path:'inicio',component: InicioComponent},                 //ruta del navegador a acceder, componente a cargar
{path:'mapa',component: MapaComponent},                 //ruta del navegador a acceder, componente a cargar
{path:'tareas',component: TareasComponent},                 //ruta del navegador a acceder, componente a cargar
{path:'arboles',component: ArbolesComponent},                 //ruta del navegador a acceder, componente a cargar
{path:'datos',component: DatosComponent},                 //ruta del navegador a acceder, componente a cargar
{path:'ayuda',component: AyudaComponent},                 //ruta del navegador a acceder, componente a cargar
{path:'perfil',component: PerfilComponent},                 //ruta del navegador a acceder, componente a cargar
{path:'acceso',component: AccesoComponent},                 //ruta del navegador a acceder, componente a cargar
{path:'login',component: LoginComponent},                 //ruta del navegador a acceder, componente a cargar
{path:'tarjetas',component: TarjetasComponent},                 //ruta del navegador a acceder, componente a cargar
//    {path:'',component: HomeComponent},                 //ruta del navegador a acceder, componente a cargar
{path:'servicios',component: ServiciosComponent},   //ruta del navegador a acceder, componente a cargar
{path:'servicios/:nombre',component: ServiciosComponent},   //ruta del navegador a acceder, componente a cargar
{path:'about',component: AboutComponent},           //ruta del navegador a acceder, componente a cargar
{path:'contacto',component: ContactoComponent},     //ruta del navegador a acceder, componente a cargar
{path:'**',component: InicioComponent},               //si da un error, siempre nos dirige a la página principal
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<Route>=RouterModule.forRoot(appRoutes);