import { Injectable } from '@angular/core';
import { Jsonp } from "@angular/http";
import 'rxjs/Rx'; // Map

@Injectable()
export class PeliculasService {
  private apikey:string = "";
  private urlMoviedb:string = "https://api.themoviedb.org/3";
  
  constructor() { }

}
