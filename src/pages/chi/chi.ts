import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import * as jstat from "jStat";
import * as math from "mathjs";


@Component({
  selector: 'page-chi',
  templateUrl: 'chi.html'
})
export class ChiPage {
  public prueba;
  public visible: Boolean;
  public def_text : String ;
  public par_text: String;
  public res_text: String;
  public text3 = "";
  public text4 = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {
    this.prueba = formBuilder.group({
      binx: ['', Validators.compose([Validators.required])],
      bindof: ['', Validators.compose([Validators.required])],
    });
    var text1 = "<p>Returns the value of $x$ in the pdf of the Chi Square distribution with degrees of freedom $dof$</p>";
    this.def_text = text1;

    this.text3 = "<p>$x$</p>";
    this.text4 = "<p>$dof$</p>";
    this.par_text = this.text3 + this.text4;
  }


  chiCalc(){

    var x = Number(this.prueba.value.binx);
    var dof = Number(this.prueba.value.bindof);
    var chi = NaN;

    if((x>=0) && !math.isNaN(x) && !math.isNaN(dof)){
      chi = jstat.jStat.chisquare.pdf(x, dof);

      if(!math.isNaN(chi)){
        this.visible = true;
        this.res_text = "<p>$p(X\\leq" + x + ")=" + chi.toFixed(3) + "$</p>";
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