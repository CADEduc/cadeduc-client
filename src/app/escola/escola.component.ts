import { Component, OnInit } from '@angular/core';
import { Escola } from '../models/escola.model';
import { EscolaService } from './escola.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.css']
})
export class EscolaComponent implements OnInit {

  escolas: Escola[];


  constructor(private router: Router, private escolaService: EscolaService) { }

  ngOnInit() {
    this.escolaService.getEscolas()
      .subscribe((data: any) => {
        this.escolas = data;
      });
  }

}
