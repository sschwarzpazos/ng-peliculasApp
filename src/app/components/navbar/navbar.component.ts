import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  buscarPelicula( texto:string ) {
    console.log( texto );
    if ( texto.length === 0 ) return;

    
  }
}
