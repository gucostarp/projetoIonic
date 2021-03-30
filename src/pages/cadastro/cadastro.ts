import { Component } from '@angular/core';
// import { EmailValidator } from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  mail: string = '';
  fone: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Informe os seus dados para acessar",
      inputs: [
        {
          id: 'email',
          name: 'email',
          placeholder: 'E-mail',
          type: 'email'
        },
        {
          name: 'telefone',
          placeholder: 'Telefone',
          type: 'tel'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            this.mail = 'Email:' + data.email;
            this.fone = 'Fone:' + data.telefone;
            console.log(data)
          }
        }
      ]
      
    });
    prompt.present();
  }
}
  
