import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnderecoComponent } from './endereco/endereco.component';

const routes: Routes = [
    { path: 'end', component: EnderecoComponent },
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