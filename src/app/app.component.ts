import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
/*
export class AppComponent {
  title = 'project03';
}
*/
export class AppComponent implements OnInit{
  title = 'project03';
  constructor(){
    console.log("Componente principal generado!!!")
  }
  ngOnInit(): void {
    
  }
}