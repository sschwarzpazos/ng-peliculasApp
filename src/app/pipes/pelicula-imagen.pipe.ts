import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  url:string = "http://image.tmdb.org/t/p/w500";

  transform( pelicula: any, poster:boolean = false ): any {
    let _url = "";

    if ( poster ) {
      _url = this.url + pelicula.poster_path;
    }

    if ( pelicula.backdrop_path ) {
      _url = this.url + pelicula.backdrop_path;
    } else {
      if (pelicula.poster_path) {
        _url = this.url + pelicula.poster_path;
      } else {
        _url = "assets/img/no_image.gif";
      }
    }
    return _url;
  }

}
