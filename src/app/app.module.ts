import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { LoginPage } from '../pages/login/login';
import { LoggedPage } from '../pages/logged/logged';
import { BadgesPage } from '../pages/badges/badges';

@NgModule({
 declarations: [
 CadastroPage,
 MyApp,
 HomePage,
 LoginPage,
 LoggedPage,
 BadgesPage,
 ],
 imports: [
  BrowserModule,
  IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  CadastroPage,
  MyApp,
  HomePage,
  LoginPage,
  LoggedPage,
  BadgesPage,
 
  ],
  providers: [
  StatusBar,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
 })
 export class AppModule {}
 
