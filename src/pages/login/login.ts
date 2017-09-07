import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import {HomePage} from '../../pages/home/home';
import {SignupPage} from '../../pages/signup/signup';

 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { username: '', password: '' };
 
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }
 
  public createAccount() {
    this.nav.push(SignupPage);
  }
 
  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {   
      if(allowed) {
        this.nav.setRoot(HomePage);
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
 
    // let alert = this.alertCtrl.create({
    //   title: 'Fail',
    //   subTitle: text,
    //   buttons: ['OK']
    // });
    // alert.present(prompt);
  }
}