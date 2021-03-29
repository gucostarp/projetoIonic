import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
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
@NgModule({
 declarations: [
 MyApp,
 HomePage,
 AlertsPage,
 InputsPage,
 ListsPage,
 CheckboxPage,
 CardsPage,
 RangePage,
 ToastPage,
 BadgesPage,
 TogglesPage
 ],
 imports: [
  BrowserModule,
  IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  MyApp,
  HomePage,
  AlertsPage,
  InputsPage,
  ListsPage,
  CheckboxPage,
  CardsPage,
  RangePage,
  ToastPage,
  BadgesPage,
  TogglesPage
  ],
  providers: [
  StatusBar,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
 })
 export class AppModule {}
 
