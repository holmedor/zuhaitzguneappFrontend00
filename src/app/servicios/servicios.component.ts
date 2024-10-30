import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Trabajo } from '../models/Trabajo';
import { TrabajosService } from '../services/trabajos.service';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
  providers: [TrabajosService]
})
export class ServiciosComponent implements OnInit{

  private _route: ActivatedRoute;
  private _router: Router;
  public nombreURL: string="";

  public trabajos: Array<Trabajo>=[];

  /*

  constructor( private _trabajosService: TrabajosService ){
  }

  ngOnInit(): void {
    this.trabajos=this._trabajosService.getTrabajos();
    console.log(this.trabajos);
  }

  constructor(_route: ActivatedRoute,_router: Router ){
    this._route=_route;
    this._router=_router;

  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{
      console.log("Parametros recibidos URL:", params);
      this.nombreURL= params["nombre"];
    });
  }
*/
constructor(private _trabajosService: TrabajosService, _route: ActivatedRoute,_router: Router ){
  this._route=_route;
  this._router=_router;

}

ngOnInit(): void {
  this.trabajos=this._trabajosService.getTrabajos();
  console.log(this.trabajos);
  this._route.params.subscribe((params: Params)=>{
    console.log("Parametros recibidos URL:", params);
    this.nombreURL= params["nombre"];
  });
}

redirigir(){
//  this._router.navigate(['/home']); //también se le podrían pasar parámetros
  this._router.navigate(['/inicio']); //también se le podrían pasar parámetros
}

}

