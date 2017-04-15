import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Bernoulli } from '../bernoulli/bernoulli';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  constructor(public navCtrl: NavController) {
    
  }

  bernoulli(){
    this.navCtrl.push(Bernoulli);
  }

}
