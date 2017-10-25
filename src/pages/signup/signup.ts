import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthProvider} from '../../providers/auth/auth';
 
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  createSuccess = false;
  registerCredentials = { name: '', accessKey: '', username: '', password: '', password2: '', caregiver: '', hospital: '', doctor: '', phone: ''};
 
  constructor(private nav: NavController, private alertCtrl: AlertController) { }
 
  public register() {
    // this.auth.register(this.registerCredentials).subscribe(success => {
    //   if (success) {
    //     this.createSuccess = true;
    //     this.showPopup("Success", "Account created.");
    //   } else {
    //     this.showPopup("Error", "Problem creating account.");
    //   }
    // },
    //   error => {
    //     this.showPopup("Error", error);
    //   });
  }
 
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}