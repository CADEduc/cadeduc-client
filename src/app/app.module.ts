import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module'

import { EnderecoComponent } from './endereco/endereco.component';
import { EnderecoService } from './endereco/endereco.service';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { EscolaComponent } from './escola/escola.component';
import { EtapaEnsinoComponent } from './etapa-ensino/etapa-ensino.component';
import { MunicipioComponent } from './municipio/municipio.component';
import { SerieComponent } from './serie/serie.component';


@NgModule({
  declarations: [
    AppComponent,
    EnderecoComponent,
    EscolaComponent,
    EtapaEnsinoComponent,
    MunicipioComponent,
    SerieComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EnderecoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
