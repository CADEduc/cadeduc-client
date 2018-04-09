import { Component, OnInit } from '@angular/core';
import { EtapaEnsino } from '../models/etapaEnsino.model';
import { Router } from '@angular/router';
import { EtapaEnsinoService } from './etapa-ensino.service';

@Component({
  selector: 'app-etapa-ensino',
  templateUrl: './etapa-ensino.component.html',
  styleUrls: ['./etapa-ensino.component.css']
})
export class EtapaEnsinoComponent implements OnInit {

  etapasEnsino: EtapaEnsino[];

  constructor(private router: Router, private etapaEnsinoService: EtapaEnsinoService) { }

  ngOnInit() {
    this.etapaEnsinoService.getEtapasEnsino()
      .subscribe((data: any) => {
        this.etapasEnsino = data;
      });
  }


}
