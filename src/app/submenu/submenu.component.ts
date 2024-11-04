import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrl: './submenu.component.css'
})
export class SubmenuComponent implements OnInit {
  constructor(){
    console.log("Submenu generado!!!")
  }
  ngOnInit(): void {
    
  }

}

