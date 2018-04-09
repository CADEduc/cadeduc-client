import { Component, OnInit } from '@angular/core';
import { Municipio } from '../models/municipio.model';
import { Router } from '@angular/router';
import { MunicipioService } from './municipio.service';

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.css']
})
export class MunicipioComponent implements OnInit {


  municipios: Municipio[];

  constructor(private router: Router, private municipioService: MunicipioService) { }

  ngOnInit() {
    this.municipioService.getMunicipios()
      .subscribe((data: any) => {
        this.municipios = data;
      });
  }


}
