import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Endereco } from '../models/endereco.model';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EnderecoService {

    constructor(private http: HttpClient) { }

    private userUrl = 'http://localhost:8080/enderecos';

    public getEnderecos() {
        return this.http.get(this.userUrl);
    }

    public getEnderecosbyId(id) {
        return this.http.get(this.userUrl + "/" + id);
    }

    public createUser(user) {
        return this.http.post(this.userUrl, user);
    }

}