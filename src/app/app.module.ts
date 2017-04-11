import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MathJaxDirective } from '../directives/Mathjax.directive';

import { Home } from '../pages/home/home';
import { Bernoulli } from '../pages/bernoulli/bernoulli';
import { BinomialPage } from '../pages/binomial/binomial';
import { PoissonPage } from '../pages/poisson/poisson';
import { HipergeometricaPage } from '../pages/hipergeometrica/hipergeometrica';
import { ExponencialPage } from '../pages/exponencial/exponencial';

@NgModule({
  declarations: [
    MyApp,
    Home,
    Bernoulli,
    BinomialPage,
    PoissonPage,
    ExponencialPage,
    HipergeometricaPage,
    MathJaxDirective
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Bernoulli,
    PoissonPage,
    BinomialPage,
    HipergeometricaPage,
    ExponencialPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
