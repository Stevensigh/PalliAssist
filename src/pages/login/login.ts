import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import {HomePage} from '../../pages/home/home';
import {SignupPage} from '../../pages/signup/signup';

import * as data from './properties.json';


 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { username: '', password: '' };
  auth_script = 'https://palliassist-dev-us.azurewebsites.net/token?identity=';
  user = '';
  pass = '';
  twilio_SID = '';
  twilio_AUTH_TOKEN = '';
  twilio_API_SECRET = '';
  twilio_UNIQUE_ID = '';
 
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }
 
  public createAccount() {
    this.nav.push(SignupPage);
  }
 
  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {   
      if(allowed) {
        this.nav.setRoot(HomePage);
        this.setTwilioCredentials();
    }
      else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }


 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  
  setTwilioCredentials() {
    this.twilio_SID = (<any>data).TWILIO_ACCOUNT_SID;
    this.twilio_AUTH_TOKEN = (<any>data).TWILIO_AUTH_TOKEN;
    this.twilio_API_SECRET = (<any>data).TWILIO_API_SECRET;
    this.twilio_UNIQUE_ID = this.auth.currentUser.username;
    console.log(this.twilio_SID);
    console.log(this.twilio_AUTH_TOKEN);
    console.log(this.twilio_API_SECRET);
    console.log(this.twilio_UNIQUE_ID);
}
}