import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage} from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the SignoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signout',
  templateUrl: 'signout.html',
})
export class SignoutPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public authProvider:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignoutPage');
  }
  goToLogin() {
    this.authProvider.logoutUser();
    this.navCtrl.push(LoginPage);
  }    

}
