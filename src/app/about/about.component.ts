import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../services/consultas.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
//  styleUrl: './about.component.css'
  styleUrls: ['./about.component.css'],
  providers: [ConsultasService]
})
export class AboutComponent implements OnInit {

  public nombre: string ="";
  public apellido: string="";

  constructor(private _consultaServicio: ConsultasService){

  }

  ngOnInit(): void{
    this.create();
    this.read();
    this.update();
    this.delete();
  }

  create(): void{
    let usuario: any={
      "name": "Iker",
      "job": "profesor"
    };
    this._consultaServicio.Create(usuario).subscribe({
      next: data=>{
        console.log("Create",data);
      },
      error: error=>{
        console.log("Create Error",error);
      } 
    });
  }
  read(): void{
    this._consultaServicio.Read().subscribe({
    next: data=>{
      console.log("Read",data);
    },
    error: error=>{
      console.log("Read Error",error);
    } 
  });
  }
  update(): void{

    let usuario: any={
      "name": "Arana",
      "job": "irakasle"
    };

    this._consultaServicio.Update(3,usuario).subscribe({
    next: data=>{
      console.log("Update",data);
    },
    error: error=>{
      console.log("Update Error",error);
    } 
  });
  }
  delete(): void{
    this._consultaServicio.Delete(5).subscribe({
    next: data=>{
      console.log("Delete",data);
    },
    error: error=>{
      console.log("Delete Error",error);
    } 
  });
  }
}
