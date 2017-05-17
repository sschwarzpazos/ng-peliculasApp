import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import pipes
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    PeliculaImagenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
