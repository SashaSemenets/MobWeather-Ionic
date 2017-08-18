import { Component, OnInit, Input } from '@angular/core';
// Interface
import { WeatherItemForFewDays }    from '../../../../interfaces/weather-item-for-few-days.interface';
import * as moment                  from 'moment';

@Component({
  selector: 'weather-item-hourly',
  templateUrl: './weather-item-for-hourly.html',
})
export class WeatherItemHourlyComponent implements OnInit {
  @Input('hourlyItem') weatherItemHourly: WeatherItemForFewDays;
  private dateArr: any[] = [];
  public hourUpdate: any;

  ngOnInit(): any {
    for (let i = 0; i < this.weatherItemHourly.list.length; i++) {
      this.weatherItemHourly.list[i].date = moment(this.weatherItemHourly.list[i].date).format('ddd - DD MMM YYYY');
      this.dateArr.push(this.weatherItemHourly.list[i]);
      this.hourUpdate = moment(this.weatherItemHourly.timeUpdate).format('HH');
      this.checkTime(this.hourUpdate, this.dateArr[0].hour)
    }
  }

  checkTime(updateTime, arr) {
    let count: number = 0;
    let firstElement: any[] = [];
    for (let i = 0; i < arr.length; i++) {
      firstElement = arr[i].time;
      arr[i].time = moment(arr[i].time).format('HH');
      if (updateTime === arr[i].time) {
        this.dateArr[0].hour.splice(0, count);
        this.dateArr[0].hour[0].time = firstElement;
        break;
      } else {
        count++;
      }
    }
  }
}
