import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  private pelicula:any;

  constructor(
    private ps:PeliculasService,
    private route:ActivatedRoute
  ) {
    this.route.params.subscribe(
      params => {
        this.ps
          .getPelicula( params[ 'id' ] )
          .subscribe( _pelicula => {
            this.pelicula = _pelicula;
          } );
      }
    );
  }

  ngOnInit() {
  }

}
