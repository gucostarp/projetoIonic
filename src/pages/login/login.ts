import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoggedPage } from '../logged/logged';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

login: string = '';
senha: string = '';
mensagem: string ='';
loginok = 'gustavo';
senhaok = '123';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'ERRO!',
      subTitle: 'Usuário ou senha inválidos!',
      buttons: ['OK']
    });
    alert.present();
  }

  enviar(campoLogin, campoSenha){
    if (campoLogin == this.loginok && campoSenha == this.senhaok){
    this.login = campoLogin;
    this.senha = campoSenha;
    this.mensagem = 'Seus dados foram enviados!';

    this.navCtrl.push(LoggedPage)


    } else this.showAlert();
    
  }
}
    

