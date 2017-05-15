import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { Home } from '../pages/home/home';
import { MathJaxDirective } from '../directives/math-jax/math-jax';
import { BernoulliPage } from '../pages/bernoulli/bernoulli';
import { BinomialPage } from '../pages/binomial/binomial';
import { ChiPage } from '../pages/chi/chi';
import { ExponencialPage } from '../pages/exponencial/exponencial';
import { HipergeometricaPage } from '../pages/hipergeometrica/hipergeometrica';
import { NormalPage } from '../pages/normal/normal';
import { PoissonPage } from '../pages/poisson/poisson';
import { TstudentPage } from '../pages/tstudent/tstudent';

@NgModule({
  declarations: [
    MyApp,
    Home,
    BernoulliPage,
    BinomialPage,
    ChiPage,
    ExponencialPage,
    HipergeometricaPage,
    NormalPage,
    PoissonPage,
    TstudentPage,
    MathJaxDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    BernoulliPage,
    BinomialPage,
    ChiPage,
    ExponencialPage,
    HipergeometricaPage,
    NormalPage,
    PoissonPage,
    TstudentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
