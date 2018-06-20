import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DirectionsRenderer } from '@ngui/map';
import { EscolaService } from '../escola/escola.service';
import { Escola } from '../models/escola.model';
import { Observable } from 'rxjs';
import { EscolaPlace } from '../models/escolaPlace.model';


@Component({
  selector: 'app-gmaps',
  templateUrl: './gmaps.component.html',
  styleUrls: ['./gmaps.component.css']
})

export class GmapsComponent implements OnInit {
  
  @ViewChild(DirectionsRenderer) directionsRendererDirective: DirectionsRenderer;

  public isCollapsed = true;

  directionsRenderer: google.maps.DirectionsRenderer;
  directionsResult: google.maps.DirectionsResult;

  myLocale: string;
  latlngEscolas: Observable<Object>;

  lat: number;
  lng: number;

  teste: any;

  direction: any  = {

    origin: '',
    destination: '',
    travelMode: 'WALKING'
  };

  escolas: Escola[];

  escolasPlace: EscolaPlace[];

  to: string;

  constructor(private cdr: ChangeDetectorRef, private escolaService: EscolaService) { 
    this.to = "";

  }

  ngOnInit() {
    this.directionsRendererDirective['initialized$'].subscribe(directionsRenderer => {
      this.directionsRenderer = directionsRenderer;
    });

    //this.escolaService.getEscolas()
    // .subscribe((data: any) => {
    //    this.escolas = data;
    //  });
  }

  directionsChanged() {
    this.directionsResult = this.directionsRenderer.getDirections();
    this.cdr.detectChanges();  
  }

  showDirection() {
    this.calculateDistance();
    this.direction.destination = document.getElementById('teste').innerHTML;
    this.directionsRendererDirective.showDirections(this.direction);
  }

  
  calculateDistance() {
    var service = new google.maps.DistanceMatrixService;

    service.getDistanceMatrix({
      origins: [this.direction.origin],
      destinations: this.getEnderecos(),
      travelMode: this.direction.travelMode
    }, this.calculate)
    
  }
  
  
  getLatLng() {
    let geo = new google.maps.Geocoder;

    geo.geocode({ address: this.myLocale }, (this.respostas));

    console.log(this.escolaService.getEscolasByLatLng(this.lat, this.lng).do);
    
   // console.log(this.escolasPlace.toString());
  }

  respostas(results, status) {
    let info = results.pop().geometry.location;
    console.log("Teste: " + info.lat() + " " + info.lng());
    this.lat = info.lat();
    this.lng = info.lng();

    //this.escolaService.getEscolasByLatLng(this.lat, this.lng).toArray.toString()
    
    //console.log(this.escolaService.getEscolasByLatLng(this.lat, this.lng).toArray.toString())
  }


  calculate(response, status) {
      if (status !== google.maps.DistanceMatrixStatus.OK) {
        alert('Error was: ' + status);
        return;
      }

      var originList = response.originAddresses;
      var destinationList = response.destinationAddresses;
      var output = document.getElementById("teste");
      output.innerHTML = "";

      var minDistance = 9000000;
      

      for (var i = 0; i < originList.length; i++) {
        var results = response.rows[i].elements;
        for (var j = 0; j < results.length; j++) {
          if (minDistance > results[j].distance.value) {
            
            minDistance = results[j].distance.value;


            output.innerHTML = destinationList[j];

            this.to = output.innerHTML;
            
          }
        }
      }
    }



  getEnderecos(): string[] {
    var enderecoEscolas = [];

    for (let index = 0; index < 4; index++) {
      const escola = this.escolas[index];
      enderecoEscolas.push(escola.endereco.logradouro + ", " + escola.endereco.municipio.nome);
    }

    return enderecoEscolas;
  }
}
