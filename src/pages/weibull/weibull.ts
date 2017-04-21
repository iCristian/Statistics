import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import * as jstat from "jStat";
import * as math from "mathjs";


@Component({
  selector: 'page-weibull',
  templateUrl: 'weibull.html'
})
export class WeibullPage {
  public prueba;
  public visible: Boolean;
  public def_text : String ;
  public par_text: String;
  public res_text: String;
  public text3 = "";
  public text4 = "";
  public text5 = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {
    this.prueba = formBuilder.group({
      binx: ['', Validators.compose([Validators.required])],
      binscale: ['', Validators.compose([Validators.required])],
      binshape: ['', Validators.compose([Validators.required])],
    });
    var text1 = "<p>Returns the value $x$ in the pdf for the Weibull distribution with parameters scale $\\lambda$ and shape $k$.</p>";
    this.def_text = text1;

    this.text3 = "<p>$x$</p>";
    this.text4 = "<p>$\\lambda$</p>";
    this.text5 = "<p>$k$</p>";
    this.par_text = this.text3 + this.text4 + this.text5;
  }


  wbCalc(){

    var x = Number(this.prueba.value.binx);
    var scale = Number(this.prueba.value.binscale);
    var shape = Number(this.prueba.value.binshape);
    var wb = NaN;

    if((x>=0) && !math.isNaN(x) && !math.isNaN(scale) && !math.isNaN(shape)){
      wb = jstat.jStat.weibull.pdf(x, scale, shape);

      if(!math.isNaN(wb)){
        this.visible = true;
        this.res_text = "<p>$p(X\\leq" + x + ")=" + wb.toFixed(3) + "$</p>";
      }else{
        this.visible = false;
        let alert = this.alertCtrl.create({
          title: "Error de Cálculo",
          message: 'Revise los parámetros',
          buttons: ['OK']
        });
        alert.present();
      }
    }else{
      this.visible = false;
      let alert = this.alertCtrl.create({
        title: "Error de Cálculo",
        message: 'Debe ingresar un valor entre `0` y `1` inclusive',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  reset(){
    this.prueba.reset();
    this.visible = false;
    this.res_text = null;
  }



}
