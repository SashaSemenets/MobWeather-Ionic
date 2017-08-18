import './rxjs-operators';

import { NgModule, ErrorHandler }                   from '@angular/core';
import { BrowserModule }                            from '@angular/platform-browser';
import { StatusBar }                                from '@ionic-native/status-bar';
import { SplashScreen }                             from '@ionic-native/splash-screen';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Geolocation }                              from '@ionic-native/geolocation';
import { HttpModule }                               from '@angular/http';

import { MyApp }                                    from './app.component';
import { TabsPage }                                 from '../pages/tabs/tabs';
import { FirstPage }                                from '../pages/first/first';
import { WeatherListComponent }                     from '../pages/first/weather-list/weather-list.component';
import { WeatherItemComponent }                     from '../pages/first/weather-list/weather-item/weather-item.component';
import { SecondPage }                               from '../pages/second/second';
import { WeatherListHourlyComponent }               from '../pages/second/weather-list-for-hourly/weather-list-for-hourly.component';
import { WeatherItemHourlyComponent }               from '../pages/second/weather-list-for-hourly/weather-item-for-hourly/weather-item-for-hourly';
import { ElementComponent }                         from '../pages/second/weather-list-for-hourly/weather-item-for-hourly/element/element.component';
import { ThirdPage }                                from '../pages/third/third';
import { WeatherListGeoComponent }                  from '../pages/third/weather-list-geo/weather-list-geo.component';
import { WeatherItemGeoComponent }                  from '../pages/third/weather-list-geo/weather-item-geo/weather-item-geo.component';

import { WeatherService }                           from '../service/weather.service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    FirstPage,
    WeatherListComponent,
    WeatherItemComponent,
    SecondPage,
    WeatherListHourlyComponent,
    WeatherItemHourlyComponent,
    ElementComponent,
    ThirdPage,
    WeatherListGeoComponent,
    WeatherItemGeoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    FirstPage,
    WeatherListComponent,
    WeatherItemComponent,
    SecondPage,
    WeatherListHourlyComponent,
    WeatherItemHourlyComponent,
    ElementComponent,
    ThirdPage,
    WeatherListGeoComponent,
    WeatherItemGeoComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherService,
    Geolocation
  ]
})
export class AppModule {}
