import { Component, Input } from '@angular/core';
// Interface
import { WeatherItem }      from '../../../../interfaces/weather-item.interface';

@Component({
  selector: 'weather-item',
  templateUrl: './weather-item.html',

})
export class WeatherItemComponent {
  @Input('item') weatherItem: WeatherItem;
}
