import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { LoginPage } from '../pages/login/login';
import { BadgesPage } from '../pages/badges/badges';
@Component({
 templateUrl: 'app.html'
})
export class MyApp {
 @ViewChild(Nav) nav: Nav;
 rootPage:any = HomePage;
 pages: Array<{title: string, component: any}>;
 constructor(platform: Platform, statusBar: StatusBar, splashScreen:
SplashScreen) {
 platform.ready().then(() => {
 // Okay, so the platform is ready and our plugins are available.
 // Here you can do any higher level native things you might need.
 statusBar.styleDefault();
 splashScreen.hide();
 });
 this.pages = [

 { title: 'Cadastro', component: CadastroPage },
 { title: 'Login', component: LoginPage },
 { title: 'Badges', component: BadgesPage },

 ];
 }
 openPage(page: any): void{
  this.nav.push(page.component);
  }
 
 }