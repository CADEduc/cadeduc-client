import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DirectionsRenderer } from '@ngui/map';

@Component({
  selector: 'app-gmaps',
  templateUrl: './gmaps.component.html',
  styleUrls: ['./gmaps.component.css']
})
export class GmapsComponent implements OnInit {
  
  @ViewChild(DirectionsRenderer) directionsRendererDirective: DirectionsRenderer;

  directionsRenderer: google.maps.DirectionsRenderer;
  directionsResult: google.maps.DirectionsResult;
  distanceMatrix: google.maps.DistanceMatrixService;

  direction: any = {
    origin: '',
    destination: '',
    travelMode: 'WALKING'
  };


  constructor(private cdr: ChangeDetectorRef) {
  
  }

  ngOnInit() {
    this.directionsRendererDirective['initialized$'].subscribe(directionsRenderer => {
      this.directionsRenderer = directionsRenderer;
    });
  }

  directionsChanged() {
    this.directionsResult = this.directionsRenderer.getDirections();
    this.cdr.detectChanges(); 
  }

  showDirection() {
    this.directionsRendererDirective['showDirections'](this.direction);   
  }

  calculateDistance() {
    document.getElementById('teste').innerHTML = this.directionsResult.routes[0].legs[0].distance.value.toString();
    
  }
}
