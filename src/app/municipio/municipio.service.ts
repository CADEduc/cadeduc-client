import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Municipio } from '../models/municipio.model';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MunicipioService {

    constructor(private http: HttpClient) { }

    private userUrl = 'http://localhost:8080/municipios';

    public getMunicipios() {
        return this.http.get(this.userUrl);
    }

    public getMunicipiobyId(id: number) {
        return this.http.get(this.userUrl + "/" + id);
    }

    public createMunicipio(municipio: Municipio) {
        return this.http.post(this.userUrl, municipio);
    }

}