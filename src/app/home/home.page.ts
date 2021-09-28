import { Component, AfterViewInit} from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { MapService } from '../service/map.service';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  //map: Map;

  constructor( public map: MapService) {}

  
  buttonClicked() {
    console.log('click');
    this.map.InitMap();
    //this.file.testi123();


  }





  

}

/*   buttonClicked() {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'http://tile.osm.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [0,0],
        zoom: 2
      }),
      target: 'map'
    })

  }
} */

/*   ngAfterViewInit() {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'http://tile.osm.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [0,0],
        zoom: 2
      }),
      target: 'map'
    })
  }
} */
