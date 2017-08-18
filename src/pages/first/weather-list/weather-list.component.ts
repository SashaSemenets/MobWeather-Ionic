import { Component, OnInit } from '@angular/core';
// Service
import { WeatherService }    from '../../../service/weather.service';
// Interface
import { WeatherItem }       from '../../../interfaces/weather-item.interface';

@Component({
  selector: 'weather-list',
  templateUrl: './weather-list.html'
})
export class WeatherListComponent implements OnInit {
  weatherItems: WeatherItem[];

  constructor(private _weatherService: WeatherService) {}

  ngOnInit():any {
    this.weatherItems = this._weatherService.getWeatherItems();
  }
}
