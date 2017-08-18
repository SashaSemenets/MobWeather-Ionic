import { Component, OnInit }     from '@angular/core';
// Service
import { WeatherService }        from '../../../service/weather.service';
// Interface
import { WeatherItemForFewDays } from '../../../interfaces/weather-item-for-few-days.interface';

@Component({
  selector: 'weather-list-hourly',
  templateUrl: './weather-list-for-hourly.html'
})
export class WeatherListHourlyComponent implements OnInit {
  weatherItemsHourly: WeatherItemForFewDays[];

  constructor(private _weatherService: WeatherService) {}

  ngOnInit():any {
    this.weatherItemsHourly = this._weatherService.getHourlyWeatherItems();
  }
}
