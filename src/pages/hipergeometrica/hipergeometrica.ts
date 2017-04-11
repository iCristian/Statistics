import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import * as stat from "simple-statistics";
import * as math from "mathjs";

@Component({
  selector: 'page-hipergeometrica',
  templateUrl: 'hipergeometrica.html'
})
export class HipergeometricaPage {
  public prueba;
  public visible: Boolean;
  public def_text : String ;
  public par_text: String;
  public res_text: String;
  public text6: String;
  public text7: String;
  public text8: String;
  public text9: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {
    this.prueba = formBuilder.group({
      binx: ['', Validators.compose([Validators.required])],
      binn: ['', Validators.compose([Validators.required])],
      binA: ['', Validators.compose([Validators.required])],
      binN: ['', Validators.compose([Validators.required])],
    });
    //this.formulae="`sum_(i=1)^n i^3=((n(n+1))/2)^2`";
    var text1 = "<p>La distribución Hipergeométrica determina la probabilidad de encontrar $x$ exitos en una muestra de tamaño $n$, extraída en una muestra sin reemplazo de una población finita de tamaño $N$, en la cual existen $A$ éxitos.</p>";
    var text2 = "<p>La probabilidad de obtener éxito en cada extraxión es $p$, su función de cuantía viene dada por:</p>";
    var text3 = "<p style='text-align: center;'>$h(x,n,A,N) = \\frac{\\binom{A}{x}\\binom{N-A}{n-x}}{\\binom{N}{n}}$</p>";
    var text4 = "<p>Para esta distribución se verifica que su esperanza y su varianza son: </p>";
    var text5 = "<p>$E(X)=n\\frac{A}{N}$</p><p>$V(X)=\\frac{nA(N-A)(N-n)}{N^{2}(N-1)}$</p>"

    this.def_text = text1 + text2 + text3 + text4 + text5;
    //`p(X = r) = \binom{n}{r}p^{r}(1-p)^{n-r}`//
    this.text6 = "<p>$x$</p>";
    var text6 = "<p>$x$</p>";
    this.text7 = "<p>$n$</p>";
    var text7 = "<p>$n$</p>";
    this.text8 = "<p>$A$</p>";
    var text8 = "<p>$A$</p>";
    this.text9 = "<p>$N$</p>";
    var text9 = "<p>$N$</p>";

    this.par_text = text6 + text7 + text8 + text9;
  }

  hipergeometricaCalc(){

    var x = Number(this.prueba.value.binx);
    var n = Number(this.prueba.value.binn);
    var A = Number(this.prueba.value.binA);
    var N = Number(this.prueba.value.binN);

    if(!math.isNaN(x) && !math.isNaN(n) && !math.isNaN(A) && !math.isNaN(N) && N > n && A>x && Number.isInteger(x) && Number.isInteger(n) && Number.isInteger(A) && Number.isInteger(N)){
      var hipergeometrica = (math.combinations(A, x) * math.combinations(N-A, n-x))/(math.combinations(N, n));
      var suma: Array<Number> = [];

      for(var i = 0; i <= parseInt(x.toString()); i = i+1){
        var flag = (math.combinations(A, i) * math.combinations(N-A, n-i))/(math.combinations(N, n));
        suma.push(flag);
      }
      if(hipergeometrica>=0){
        this.visible = true;
        this.res_text = "<p>$p(X= " + x + ")=" + hipergeometrica.toFixed(3) + "$</p><p>$p(X\\leq" + x + ")=" + (stat.sumSimple(suma)).toFixed(3) + "$</p>";
      }
    }else{
      this.visible = false;
      let alert = this.alertCtrl.create({
        title: "Error de Cálculo",
        message: 'Verifique que los parametrós ingresados sean coherentes para realizar el cálculo',
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