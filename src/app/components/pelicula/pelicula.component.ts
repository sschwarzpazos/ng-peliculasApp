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
  private regresarA:string = "";
  private busqueda:string = "";

  constructor(
    private ps:PeliculasService,
    private route:ActivatedRoute
  ) {
    this.route.params.subscribe(
      params => {
        this.regresarA = params[ 'pag' ];
        if ( params[ 'busqueda' ] ) {
          this.busqueda = params[ 'busqueda' ];
        }

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
