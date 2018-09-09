import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import { ClaimPage } from '../pages/claim/claim';
import { ContactPage } from '../pages/contact/contact';
import { StatisticsPage } from '../pages/statistics/statistics';
import { LoginPage } from '../pages/login/login';
import { AilmentPage } from '../pages/ailment/ailment';
import { ProPage } from '../pages/pro/pro';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    AilmentPage,
    ChatPage,
    ClaimPage,
    ContactPage,
    StatisticsPage,
    ProPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    AilmentPage,
    ChatPage,
    ClaimPage,
    ContactPage,
    StatisticsPage,
    ProPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
