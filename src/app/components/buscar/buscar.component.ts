import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  buscar:string = "";

  constructor(private ps:PeliculasService) { }

  ngOnInit() {
  }

  buscarPelicula() {
    if (this.buscar.length === 0) return;

    
  }

}
