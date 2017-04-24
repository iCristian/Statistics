import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Bernoulli } from '../bernoulli/bernoulli';
import { BinomialPage } from '../binomial/binomial';
import { PoissonPage } from '../poisson/poisson';
import { HipergeometricaPage } from '../hipergeometrica/hipergeometrica';
import { ExponencialPage } from '../exponencial/exponencial';
import { NormalPage } from '../normal/normal';
import { CreditosPage } from '../creditos/creditos';
import { ChiPage } from '../chi/chi';
import { TstudentPage } from '../tstudent/tstudent';

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

  binomial(){
    this.navCtrl.push(BinomialPage);
  }

  poisson(){
    this.navCtrl.push(PoissonPage);
  }

  hipergeometrica(){
    this.navCtrl.push(HipergeometricaPage);
  }

  exponencial(){
    this.navCtrl.push(ExponencialPage);
  }

  normal(){
    this.navCtrl.push(NormalPage);
  }

  creditos(){
    this.navCtrl.push(CreditosPage);
  }

  chi(){
    this.navCtrl.push(ChiPage);
  }

  tstudent(){
    this.navCtrl.push(TstudentPage);
  }

}
