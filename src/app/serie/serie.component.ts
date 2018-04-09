import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerieService } from './serie.service';
import { Serie } from '../models/serie.model';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {


  series: Serie[];

  constructor(private router: Router, private serieService: SerieService) { }

  ngOnInit() {
    this.serieService.getSeries()
      .subscribe((data: any) => {
        this.series = data;
      });
  }

}
