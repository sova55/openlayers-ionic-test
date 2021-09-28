import { Injectable } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  public async InitMap() {
  var fileName = '../assets/Kemin_sompio/{z}/{x}/{y}.png';  
  var map = new Map({
    view: new View({
      center: [3140644.618181, 10366084.027922],
      zoom: 6
    }),
    layers: [
      new TileLayer({
        source: new XYZ({
         // url: 'http://192.168.1.163:8080/Kemin_sompio/{z}/{x}/{y}.png'
         url: fileName
        })
      })
    ],
    target: 'map'
  });
}


  constructor() { }
  
}
