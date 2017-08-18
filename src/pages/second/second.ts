import { Component }                      from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
// Service
import { WeatherService }                 from "../../service/weather.service";
// Interface
import { WeatherItemForFewDays }          from "../../interfaces/weather-item-for-few-days.interface";

@Component({
  templateUrl: 'second.html'
})
export class SecondPage {
  private days: number = 1;
  public cityName: string;
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
    this._weatherService.searchWeatherDataForFewDays(cityname, this.days)
      .subscribe(
        datas => {
          const weatherItemForFewDay = new WeatherItemForFewDays(datas.location.name, datas.location.country, datas.location.lat,
            datas.location.lon, datas.forecast.forecastday, datas.current.last_updated);
          this._weatherService.addHourlyWeatherItem(weatherItemForFewDay);
        }
      );
  }

  showOtherParams() {
    this.isVisibleOtherParams = true;
  }
}
