import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {routing, appRoutingProviders } from './app.routing';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';
//import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { MapaComponent } from './mapa/mapa.component';
import { TareasComponent } from './tareas/tareas.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { ArbolComponent } from './arbol/arbol.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ArbolesComponent } from './arboles/arboles.component';
import { AccesoComponent } from './acceso/acceso.component';
import { DatosComponent } from './datos/datos.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { MenufooterComponent } from './menufooter/menufooter.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { BiometricosComponent } from './biometricos/biometricos.component';
import { SanitariosComponent } from './sanitarios/sanitarios.component';
import { ActuacionesComponent } from './actuaciones/actuaciones.component';
//FIREBASE
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { RouterModule, Routes } from '@angular/router';

@NgModule({ declarations: [
        AppComponent,
        MenuComponent,
        AboutComponent,
        ContactoComponent,
        //    HomeComponent,
        ServiciosComponent,
        InicioComponent,
        MapaComponent,
        TareasComponent,
        TarjetasComponent,
        ArbolComponent,
        LoginComponent,
        PerfilComponent,
        AyudaComponent,
        ArbolesComponent,
        AccesoComponent,
        DatosComponent,
        SubmenuComponent,
        MenufooterComponent,
        IdentificacionComponent,
        BiometricosComponent,
        SanitariosComponent,
        ActuacionesComponent
    ],
    bootstrap: [AppComponent, MenuComponent], 
    imports: [BrowserModule,
        AppRoutingModule,
        routing,
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        RouterModule], 
        providers: [appRoutingProviders, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
