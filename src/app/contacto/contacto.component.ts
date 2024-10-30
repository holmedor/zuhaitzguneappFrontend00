import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../services/consultas.service';
import { ServiciosComponent } from '../servicios/servicios.component';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers: [ConsultasService]
})

export class ContactoComponent implements OnInit{

  public nombre: string="";
  public apellido: string="";

  constructor( private _consultaServicio: ConsultasService){}

    ngOnInit(): void{
      this._consultaServicio.getUser().subscribe(
        result=>{
            console.log(result);
            this.nombre=result.first_name;
            this.apellido=result.last_name;
        },
          error=>{
            console.log(<any>error);
          }
      )
    }
}

