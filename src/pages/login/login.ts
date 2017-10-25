import { Component } from '@angular/core';
import {
  IonicPage, 
  Loading,
  LoadingController, 
  NavController,
  AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import {HomePage} from '../../pages/home/home';
import {SignupPage} from '../../pages/signup/signup';
import { EmailValidator } from '../../validators/email';
import {ResetPasswordPage} from '../../pages/reset-password/reset-password';
@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loading: Loading;
  public loginForm: FormGroup;
  registerCredentials = { username: '', password: '' };
  constructor(  public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController, 
    public authProvider: AuthProvider, 
    public formBuilder: FormBuilder) { 
      this.loginForm = formBuilder.group({
        email: ['', 
        Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', 
        Validators.compose([Validators.minLength(6), Validators.required])]
      });
    }


  goToSignup(): void { 
    this.navCtrl.push(SignupPage); 
  }
  
  goToResetPassword(): void { 
    this.navCtrl.push(ResetPasswordPage); 
  }
 
  loginUser(): void {
    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
      this.authProvider.loginUser(this.loginForm.value.email, 
        this.loginForm.value.password)
      .then( authData => {
        this.loading.dismiss().then( () => {
          this.navCtrl.setRoot(HomePage);
        });
      }, error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
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
    // alert.present(prompt);
  }

  
}