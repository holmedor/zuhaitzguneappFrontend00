import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arboles',
  templateUrl: './arboles.component.html',
  styleUrl: './arboles.component.css'
})
export class ArbolesComponent implements OnInit{
  nombre: string| null=null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el parámetro 'nombre'
    this.route.params.subscribe(params => {
      this.nombre = params['nombre'];
      console.log(this.nombre);
    });

    // Obtener los parámetros de consulta (query params)
    this.route.queryParams.subscribe(queryParams => {
      console.log(queryParams);
    });
  }
}
