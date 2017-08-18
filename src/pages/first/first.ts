import { Component }                      from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { WeatherItem }                    from '../../interfaces/weather-item.interface';
import { WeatherService }                 from '../../service/weather.service';
import * as moment                        from 'moment';

@Component({
  selector: 'page-first',
  templateUrl: 'first.html'
})
export class FirstPage {
  public cityName: string = '';
  public country: string;
  public isVisibleOtherParams: boolean = false;

  constructor(public navCtrl: NavController, private _weatherService: WeatherService, public alertCtrl: AlertController) {}

  onSearch() {
    this._weatherService.searchCityData(this.cityName, this.country)
      .subscribe(
        data => {
          this.showRadio(data);
        }
      );
    this.isVisibleOtherParams = false;
  }

  showRadio(arr) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Select your city!');

    for(let i = 0; i < arr.length; i++) {
      alert.addInput({
        type: 'radio',
        label: `${arr[i].name}`,
        value: `${arr[i].name}`,
        checked: false
      });
    }

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.show(data);
      }
    });
    alert.present();
  }

  show(cityname: string) {
    this._weatherService.searchWeatherData(cityname)
      .subscribe(
        data => {
          const weatherItem = new WeatherItem(data.location.name, data.current.condition.text, moment(data.current.last_updated).format('HH:mm'), data.location.tz_id,
            data.current.temp_c, data.current.feelslike_c, data.current.wind_mph, data.current.wind_degree, data.current.humidity,
            data.current.pressure_mb, data.location.country, data.location.lat, data.location.lon, data.current.condition.icon.substring(30));
          this._weatherService.addWeatherItem(weatherItem);
        }
      );
  }

  showOtherParams() {
    this.isVisibleOtherParams = true;
  }

  doRefresh(refresher) {
    setTimeout(() => {
      this._weatherService.clearHourlyWeatherItems();
      refresher.complete();
    }, 2000);
  }}
