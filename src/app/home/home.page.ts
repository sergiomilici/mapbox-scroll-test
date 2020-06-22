import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: [
    'home.page.scss',
    'map.scss'],
})
export class HomePage implements AfterViewInit {

  constructor() {
  }

  ngAfterViewInit() {
    window.mapboxgl.accessToken = '<YOUR_ACCESS_TOKEN>';
    const map = new window.mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });

    map.once('load', () => map.resize());
  }

}
