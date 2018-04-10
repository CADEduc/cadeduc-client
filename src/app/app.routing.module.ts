import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnderecoComponent } from './endereco/endereco.component';
import { MunicipioComponent } from './municipio/municipio.component';
import { EscolaComponent } from './escola/escola.component';
import { EtapaEnsinoComponent } from './etapa-ensino/etapa-ensino.component';
import { SerieComponent } from './serie/serie.component';
import { GmapsComponent } from './gmaps/gmaps.component';

const routes: Routes = [
    { path: 'end', component: EnderecoComponent }, //listar endereços
    { path: 'muni', component: MunicipioComponent }, //listar municipios
    { path: 'esc', component: EscolaComponent }, //listar escolas
    { path: 'etap', component: EtapaEnsinoComponent }, //listar etapas de ensino
    { path: 'ser', component: SerieComponent }, //listar séries
    { path: 'map', component: GmapsComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class AppRoutingModule { }