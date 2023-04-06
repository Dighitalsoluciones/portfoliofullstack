import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TarjetacentralComponent } from './components/tarjetacentral/tarjetacentral.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EncabezadoComponent,
    TarjetasComponent,
    NavbarComponent,
    TarjetacentralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
