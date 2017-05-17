import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//import services
import { PeliculasService } from './services/peliculas.service';

//import Routes
import { APP_ROUTING } from './app.routes';

//import pipes
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';

// import components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GaleriaComponent } from './components/home/galeria.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PeliculaComponent,
    BuscarComponent,
    GaleriaComponent,
    PeliculaImagenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    APP_ROUTING
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
