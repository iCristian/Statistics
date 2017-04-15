import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import * as stat from "simple-statistics";


@Component({
  selector: 'page-poisson',
  templateUrl: 'poisson.html'
})

export class PoissonPage {
  public prueba;
  public visible: Boolean;
  public def_text : String ;
  public par_text: String;
  public res_text: String;
  public text6: String;
  public text7: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {
    this.prueba = formBuilder.group({
      binlambda: ['', Validators.compose([Validators.required])],
      binx: ['', Validators.compose([Validators.required])]
    });
    //this.formulae="`sum_(i=1)^n i^3=((n(n+1))/2)^2`";
    var text1 = "<p>Esta distribución de probabilidad es una de las distribuciones discretas de probabilidad de más utilidad. Al igual que para la distribución binomial, esta se utiliza cuando el analista está interesado en encontrar la probabilidad de que ocurran $x$ éxitos en un proceso de $n$ pruebas, si existe una probabilidad $p$ de éxito en cada prueba.</p><p>La diferencia está en que la distribución de Poisson, se usa cuando el número $n$ de repeticiones del experimento tiende a ser muy grande, y la probabilidad de obtener un éxito en cada prueba tiende a ser muy pequeño.";
    var text2 = "<p>Sea $\\lambda = np$, entonces:</p>";
    var text3 = "<p style='text-align: center;'>$p(x)=\\frac{e^{-\\lambda}\\lambda^{x}}{x!}$ con $x=0,1,2 ... , \\lambda > 0$</p>";
    var text4 = "<p>Para esta distribución se verifica que su esperanza y su varianza son: </p>";
    var text5 = "<p>$E(X)=\\lambda$</p><p>$V(X)=\\lambda$</p>"

    this.def_text = text1 + text2 + text3 + text4 + text5;
    //`p(X = r) = \binom{n}{r}p^{r}(1-p)^{n-r}`//
    this.text6 = "<p>$\\lambda = np$</p>";
    var text6 = "<p>$\\lambda = np$</p>";
    this.text7 = "<p>$x$: Prob. de que éxito en $n$ pruebas</p>";
    var text7 = "<p>$x$: Prob. de que éxito en $n$ pruebas</p>";

    this.par_text = text6 + text7;
  }

  poissonCalc(){

    var lambda = Number(this.prueba.value.binlambda);
    var x = Number(this.prueba.value.binx);

    if(lambda>=0 && !isNaN(x) && x>=0){
      var poisson = (Math.exp(-1 * lambda) * lambda^(x))/(stat.factorial(x));
      var suma: Array<Number> = [];

      for(var i = 0; i <= parseInt(x.toString()); i = i+1){
        var flag = (Math.exp(-1 * lambda) * lambda^(i))/(stat.factorial(i));
        suma.push(flag);
      }
      if(poisson >= 0){
        this.visible = true;
        this.res_text = "<p>$p(X= " + x + ")=" + poisson.toFixed(3) + "$</p><p>$p(X\\leq" + x + ")=" + (stat.sumSimple(suma)).toFixed(3) + "$</p><p>$E(X)=" + lambda.toFixed(3) + "$</p><p>$V(X)="+ lambda.toFixed(3) + "$</p>";
      }
    }else{
      this.visible = false;
      let alert = this.alertCtrl.create({
        title: "Error de Cálculo",
        message: 'Debe ingresar parámetros válidos.',
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
