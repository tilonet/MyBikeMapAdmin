import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, Layer, geoJSON, marker, icon, circle, polygon } from 'leaflet';
import {ApicallService} from '../apicall.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public apiData;

  constructor(private apicallService: ApicallService) {

  }

  ngOnInit() {
    console.log("start get data");
    this.getData();
  }

  layers = [
    circle([ 46.95, -122 ], { radius: 5000 }),
    polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]),
    marker([ 46.879966, -121.726909 ]),
    //geoJSON(this.apiData.response.track)
  ];

	options = {

	zoom: 12,
	center: latLng( 52.1054, 7.6018)
};

  getData() {

    this.apicallService.getData().subscribe(
      data => {this.apiData = data},
      err => console.error(err),
      () => console.log(this.apiData)
    );
  }

}
