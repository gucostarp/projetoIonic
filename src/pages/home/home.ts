import { Component } from '@angular/core';
import { ToastController, ToastOptions, NavController, ActionSheetController } from 'ionic-angular';

  @Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  })
 
export class HomePage {
 toastOptions: ToastOptions
  constructor(public navCtrl: NavController,
 public actionsheetCtrl: ActionSheetController,
 private toast: ToastController) {
 }

showToast(message: any){
  const toast = this.toast.create({
    message: message,
    duration: 3000,
    position: 'botton',
    showCloseButton: true,
    closeButtonText: 'Fechar'
  });
  toast.present();
} 

 mostrarComponente(){

 let actionSheet = this.actionsheetCtrl.create({

 title: 'Escolha uma ação para a música',
 cssClass: 'action-sheets-basic-page',
 buttons: [
 {
 text: 'Apagar',
 role: 'destructive',
 icon: 'trash',
 handler: () => {
 console.log('Clicou em Apagar');
 }
 },
 {
  text: 'Compartilhar',
  icon: 'share',
  handler: () => {
  console.log('Clicou em Compartilhar');
  }
  },
  {
  text: 'Tocar',
  icon: 'arrow-dropright-circle',
  handler: () => {
  console.log('Clicou em Tocar');
  }
  },
  {
  text: 'Favoritar',
  icon: 'heart-outline',
  handler: () => {
  console.log('Clicou em Favoritar');
  }
  },
  {
  text: 'Cancelar',
  role: 'cancel',
  icon: 'close',
  handler: () => {
  console.log('Clicou em Cancelar');
  }
}
]
});
actionSheet.present();
}

}
