import { Component, Input, OnInit } from "@angular/core";
import * as moment                  from 'moment';

@Component({
  selector: 'element',
  templateUrl: 'element.html'
})
export class ElementComponent implements OnInit {
  @Input('item') hourlyDayItems: any;

  ngOnInit(): any {
    for (let i = 0; i < this.hourlyDayItems.length; i++) {
      this.hourlyDayItems[i].time = moment(this.hourlyDayItems[i].time).format('HH:mm');
      this.hourlyDayItems[i].condition.icon = this.hourlyDayItems[i].condition.icon.substring(30);
    }
  }
}
