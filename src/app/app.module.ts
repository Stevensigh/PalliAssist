import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

//Different main Pages
import { MessengerPage } from '../pages/messenger/messenger';
import { PainlocatorPage } from '../pages/painlocator/painlocator';
import { MedicationPage } from '../pages/medication/medication';
import { SettingsPage } from '../pages/settings/settings';
import { EsassurveyPage } from '../pages/esassurvey/esassurvey';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthService } from './../providers/auth-service';
import { ChatsProvider } from '../providers/chats/chats';
//Youtube
import {YoutubePipe } from '../pipes/youtube/youtube';

//firebase
import { firebaseConfig } from './app.constants';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//keyboard
import { Keyboard } from '@ionic-native/keyboard';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    MessengerPage,
    PainlocatorPage,
    MedicationPage,
    SettingsPage,
    EsassurveyPage,
    YoutubePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    MessengerPage,
    PainlocatorPage,
    MedicationPage,
    SettingsPage,
    EsassurveyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    Keyboard,
    ChatsProvider
  ]
})
export class AppModule {}
