import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DirectionsRenderer } from '@ngui/map';
import { EscolaService } from '../escola/escola.service';
import { Escola } from '../models/escola.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { EscolaPlace } from '../models/escolaPlace.model';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

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

  public lat: number;
  public lng: number;

  teste: any;

  direction: any  = {

    origin: String,
    destination: String,
    travelMode: 'WALKING'
  };


  escolas: Escola[];

  escolasPlace: any;

  to: string;

  constructor(private cdr: ChangeDetectorRef, private escolaService: EscolaService, private http: HttpClient) { 
    this.to = "";

  }

  ngOnInit() {
    this.directionsRendererDirective['initialized$'].subscribe(directionsRenderer => {
      this.directionsRenderer = directionsRenderer;
    });

    //this.escolaService.getEscolasByLatLng(-5.794482899999999, -35.21289660000002)
    //.subscribe((data: any) => {
    //  this.escolasPlace = data;
    //  console.log(this.escolasPlace[0].nome)
    //});

    

    //this.escolaService.getEscolas()
    // .subscribe((data: any) => {
    //    this.escolas = data;
    //  });
  }

  directionsChanged() {
    this.directionsResult = this.directionsRenderer.getDirections();
    this.cdr.detectChanges();  
  }

  showDirection(direcao) {
    //this.calculateDistance();
    //this.direction.destination = document.getElementById('teste').innerHTML;
    this.directionsRendererDirective.showDirections(direcao);
    /*
    let directService = new google.maps.DirectionsService();
    console.log(direcao)
      directService.route(direcao, 
        async function(retorno, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        this.directionsRendererDirective.setDirections(retorno);
      }
    });
    //*/
  }

  
  calculateDistance() {
    var service = new google.maps.DistanceMatrixService;

    service.getDistanceMatrix({
      origins: [this.direction.origin],
      destinations: this.getEnderecos(),
      travelMode: this.direction.travelMode
    }, this.calculate)
    
  }
  
  
  async getLatLng() {
      var _lat;
      var _lng;
      const service = this.escolaService;
      var geo = new google.maps.Geocoder;
      var escolas: any;
      const ht = this.http;

      geo.geocode({ address: this.myLocale }, (async function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          var info;
          if (results[0]) {
            info = results[0].geometry.location;
            
            //console.log(service.getEscolasByLatLng(info.lat(), info.lng()))
            _lat = info.lat();
            _lng = info.lng();
            //console.log("Teste: " + _lat + " " + _lng);
          } else {
            window.alert('Local não encontrado');
          }
        } else {
          window.alert('Erro ao processar geocode: ' + status);
        }
      }));

      await this.sleep(1000);       
     
      this.lat = _lat;
      this.lng = _lng;
      
      console.log("Teste: " + this.lat + " " + this.lng);

      let url = "http://localhost:8080/escolas" + "/endereco/" + _lat + "/" + _lng

      return this.buscar(url);

      
  }
    
  buscar(url){
    
    let aux = this.http.get(url).
      subscribe(
      (data: String) => {
      this.direction.origin = this.myLocale
      this.direction.destination = data[0]['logradouro']
  
      return this.showDirection(this.direction)
      },
      error => console.log(error) // error path
    );
  }
    
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
