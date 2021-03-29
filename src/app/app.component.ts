import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { AlertsPage } from '../pages/alerts/alerts';
import { InputsPage } from '../pages/inputs/inputs';
import { ListsPage } from '../pages/lists/lists';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { CardsPage } from '../pages/cards/cards';
import { RangePage } from '../pages/range/range';
import { ToastPage } from '../pages/toast/toast';
import { BadgesPage } from '../pages/badges/badges';
import { TogglesPage } from '../pages/toggles/toggles';
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
 { title: 'Alerts', component: AlertsPage },
 { title: 'Inputs', component: InputsPage },
 { title: 'Lists', component: ListsPage },
 { title: 'CheckBox', component: CheckboxPage },
 { title: 'Cards', component: CardsPage },
 { title: 'Range', component: RangePage },
 { title: 'Toast', component: ToastPage },
 { title: 'Badges', component: BadgesPage },
 { title: 'Toggles', component: TogglesPage }
 ];
 }
 openPage(page: any): void{
  this.nav.push(page.component);
  }
 
 }