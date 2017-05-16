import { Injectable } from '@angular/core';
import { Jsonp } from "@angular/http";
import 'rxjs/Rx'; // Map

@Injectable()
export class PeliculasService {
  private apikey:string = "535a7ab8990d9bca6de83d0b9618cd8d";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor() { }

}
