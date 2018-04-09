import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module'

import { EnderecoService } from './endereco/endereco.service';
import { EscolaService } from './escola/escola.service';
import { SerieService } from './serie/serie.service';
import { MunicipioService } from './municipio/municipio.service'
import { EtapaEnsinoService } from './etapa-ensino/etapa-ensino.service';

import { EnderecoComponent } from './endereco/endereco.component';
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
  providers: [
    EnderecoService, 
    EscolaService,
    SerieService,
    MunicipioService,
    EtapaEnsinoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
