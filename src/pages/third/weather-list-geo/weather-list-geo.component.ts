import { Component, OnInit }     from "@angular/core";
// Service
import { WeatherService }        from '../../../service/weather.service';
// Interface
import { WeatherItemGEO }        from '../../../interfaces/weather-item-geo.interface';

@Component({
  selector: 'weather-list-geo',
  templateUrl: './weather-list-geo.html'
})
export class WeatherListGeoComponent implements OnInit {
  weatherItemsGeo: WeatherItemGEO[];

  constructor(private _weatherService: WeatherService) {}

  ngOnInit():any {
    this.weatherItemsGeo = this._weatherService.getGEOWeatherItems();
  }
}
