import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Escola } from '../models/escola.model';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EscolaService {

    constructor(private http: HttpClient) { }

    private userUrl = 'http://localhost:8080/escolas';

    public getEscolas() {
        return this.http.get(this.userUrl);
    }

    public getEscolabyId(id: number) {
        return this.http.get(this.userUrl + "/" + id);
    }

    public createEscola(escola: Escola) {
        return this.http.post(this.userUrl, escola);
    }

    public getEscolasByLatLng(lat: number, lng: number) {
        return this.http.get(this.userUrl+"/endereco/"+lat+"/"+lng)
    }
}