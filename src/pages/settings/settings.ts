import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage} from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  goToLogin() {
    this.authProvider.logoutUser();
    this.navCtrl.push(LoginPage);
  }    

}
