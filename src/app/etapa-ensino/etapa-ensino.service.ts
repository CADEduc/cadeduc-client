import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { EtapaEnsino } from '../models/etapaEnsino.model';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EtapaEnsinoService {

    constructor(private http: HttpClient) { }

    private userUrl = 'http://localhost:8080/etapasEnsino';

    public getEtapasEnsino() {
        return this.http.get(this.userUrl);
    }

    public getEtapaEnsinobyId(id: number) {
        return this.http.get(this.userUrl + "/" + id);
    }

    public createEtapaEnsino(etapaEnsino: EtapaEnsino) {
        return this.http.post(this.userUrl, etapaEnsino);
    }

}