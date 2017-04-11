import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Home } from '../pages/home/home';
import { Bernoulli } from '../pages/bernoulli/bernoulli';
import { BinomialPage } from '../pages/binomial/binomial';
import { PoissonPage } from '../pages/poisson/poisson';
import { HipergeometricaPage } from '../pages/hipergeometrica/hipergeometrica';
import { ExponencialPage } from '../pages/exponencial/exponencial';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: Home },
      { title: 'Bernoulli', component: Bernoulli },
      { title: 'Binomial', component: BinomialPage},
      { title: 'Poisson', component: PoissonPage},
      { title: 'Hipergeométrica', component: HipergeometricaPage},
      { title: 'Exponencial', component: ExponencialPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
