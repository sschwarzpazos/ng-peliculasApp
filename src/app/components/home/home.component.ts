import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera:any;
  populares:any;
  popularesNinhos:any;

  constructor( private peliculasService:PeliculasService) {
    this.peliculasService
      .getCartelera()
      .subscribe( data => this.cartelera = data );

    this.peliculasService
      .getPopulares()
      .subscribe( data => this.populares = data );

    this.peliculasService
      .getPopularesNinhos()
      .subscribe( data => this.popularesNinhos = data );
  }

  ngOnInit() {
  }

}
