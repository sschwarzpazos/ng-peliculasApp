import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera:any;

  constructor( private peliculasService:PeliculasService) {
    this.peliculasService
      .getCartelera()
      .subscribe( data => this.cartelera = data );
  }

  ngOnInit() {
  }

}
