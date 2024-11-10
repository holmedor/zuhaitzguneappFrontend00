import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
/*
export class AppComponent {
  title = 'project06';
}
*/
export class AppComponent implements OnInit{
  title = 'project06';
nombre: any|string;


  constructor(){
    console.log("Componente principal generado!!!")
  }
  ngOnInit(): void {
    
  }
}