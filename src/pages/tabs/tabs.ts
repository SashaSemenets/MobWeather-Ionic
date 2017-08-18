import { Component }  from '@angular/core';

import { FirstPage }  from '../first/first';
import { SecondPage } from '../second/second';
import { ThirdPage }  from '../third/third';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FirstPage;
  tab2Root = SecondPage;
  tab3Root = ThirdPage;

  constructor() {

  }
}
