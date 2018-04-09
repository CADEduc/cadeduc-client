import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Serie } from '../models/serie.model';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SerieService {

    constructor(private http: HttpClient) { }

    private userUrl = 'http://localhost:8080/series';

    public getSeries() {
        return this.http.get(this.userUrl);
    }

    public getSeriebyId(id) {
        return this.http.get(this.userUrl + "/" + id);
    }

    public createSerie(serie: Serie) {
        return this.http.post(this.userUrl, serie);
    }

}