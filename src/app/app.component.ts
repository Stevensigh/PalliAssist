import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import{LoginPage} from '../pages/login/login';
import { AuthService } from './../providers/auth-service';

//Different main Pages
import { MessengerPage } from '../pages/messenger/messenger';
import { PainlocatorPage } from '../pages/painlocator/painlocator';
import { MedicationPage } from '../pages/medication/medication';
import { SettingsPage } from '../pages/settings/settings';
import { EsassurveyPage } from '../pages/esassurvey/esassurvey';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Messenger', component: MessengerPage},
      { title: 'Medication', component: MedicationPage},
      { title: 'ESAS Survey', component: EsassurveyPage},
      { title: 'Pain Locator', component: PainlocatorPage},
      { title: 'Settings ', component: SettingsPage}

    ];


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
