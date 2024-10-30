import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{

  private _route: ActivatedRoute;
  private _router: Router;

  constructor(_route: ActivatedRoute,_router: Router ){
    this._route=_route;
    this._router=_router;
  
  }
  
  ngOnInit(): void {
      console.log();
    };

  mapa(){
      this._router.navigate(['/mapa']); //también se le podrían pasar parámetros
    }

acceso(){
        this._router.navigate(['/acceso']); //también se le podrían pasar parámetros
      }
}
