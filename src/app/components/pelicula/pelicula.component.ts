import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  constructor(
    private route:ActivatedRoute
  ) {
    this.route.params.subscribe(
      params => {
        console.log( params )
      }
    );
  }

  ngOnInit() {
  }

}
