import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { EnderecoService } from './endereco.service';
import { Endereco } from '../models/endereco.model';




@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  enderecos: Endereco[];

  constructor(private router: Router, private enderecoService: EnderecoService) { }

  ngOnInit() {
    this.enderecoService.getEnderecos()
      .subscribe( (data: any) => {
        this.enderecos = data;
      });
  };

}
