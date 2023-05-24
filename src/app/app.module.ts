import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EsteirasComponent } from './pages/esteiras/esteiras.component';
import { HttpClientModule } from '@angular/common/http';
import { BotoesComponent } from './pages/botoes/botoes.component';

@NgModule({
  declarations: [
    AppComponent,
    EsteirasComponent,
    BotoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
