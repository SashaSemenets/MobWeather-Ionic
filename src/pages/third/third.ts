import { Component }                                         from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { Geolocation }                                       from '@ionic-native/geolocation';
import { WeatherService }                                    from '../../service/weather.service';
import { WeatherItemGEO }                                    from '../../interfaces/weather-item-geo.interface';
import * as moment                                           from 'moment';

@Component({
  selector: 'page-third',
  templateUrl: 'third.html'
})
export class ThirdPage {
  private isValid: boolean = true;
  private lat: any;
  private long: any;
  private foundCity: string = '';
  private data: any = {};

  constructor(
    public navCtrl: NavController,
    private _weatherService: WeatherService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private geolocation: Geolocation
  ) {};

  ngOnInit() {
    let loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: "Please wait! Search your GEO coordinates...",
      duration: 30000
    });
    loader.present();
    this.geolocation.getCurrentPosition().then(pos => {
      this.lat = pos.coords.latitude;
      this.long = pos.coords.longitude;
      loader.dismiss();
      this.setPosition(this.lat, this.long);
    }).catch((error) => {
      let alert = this.alertCtrl.create({
        title: 'Error getting location!',
        subTitle: error.message,
        buttons: ['OK']
      });
      alert.present();
    });
  }

  setPosition(lat, long){
    this._weatherService.searchCityByGEOCoords(lat, long)
      .subscribe(
        data => {
          this.foundCity = data[1].name;
          this._weatherService.searchWeatherData(this.foundCity)
            .subscribe(
              data => {
                this.data = data;
              }
            );
        },
        error => {
          let alert = this.alertCtrl.create({
            title: 'Error getting location!',
            subTitle: error.message,
            buttons: ['OK']
          });
          alert.present();
        }
      );
  }

  onSearch() {
    const weatherItemGEO = new WeatherItemGEO(this.data.location.name, this.data.current.condition.text, moment(this.data.current.last_updated).format('HH:mm'), this.data.location.tz_id,
      this.data.current.temp_c, this.data.current.feelslike_c, this.data.current.wind_mph, this.data.current.wind_degree, this.data.current.humidity,
      this.data.current.pressure_mb, this.data.location.country, this.data.location.lat, this.data.location.lon, this.data.current.condition.icon.substring(30));
    this._weatherService.addWeatherItemByGEO(weatherItemGEO);
    this.isValid = false;
  }
}
