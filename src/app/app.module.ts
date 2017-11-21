import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import {ResetPasswordPage} from '../pages/reset-password/reset-password';

//Different main Pages
import { MessengerPage } from '../pages/messenger/messenger';
import { PainlocatorPage } from '../pages/painlocator/painlocator';
import { MedicationPage } from '../pages/medication/medication';
import { SettingsPage } from '../pages/settings/settings';
import { EsassurveyPage } from '../pages/esassurvey/esassurvey';
import { SignoutPage } from '../pages/signout/signout';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthProvider } from './../providers/auth/auth';
//Youtube
import {YoutubePipe } from '../pipes/youtube/youtube';

//firebase
import { firebaseConfig } from './app.constants';


//keyboard
import { Keyboard } from '@ionic-native/keyboard';

//angularfire 
//Used for messenger
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    SignoutPage,
    MessengerPage,
    PainlocatorPage,
    MedicationPage,
    SettingsPage,
    EsassurveyPage,
    ResetPasswordPage,
    YoutubePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    ResetPasswordPage,
    MessengerPage,
    PainlocatorPage,
    MedicationPage,
    SettingsPage,
    EsassurveyPage,
    SignoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Keyboard,
    AuthProvider,
    AngularFireDatabase, 
    AngularFireDatabaseModule,
  ]
})
export class AppModule {}
