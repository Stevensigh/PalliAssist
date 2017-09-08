import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EsassurveyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-esassurvey',
  templateUrl: 'esassurvey.html',


})
export class EsassurveyPage {
  data = {
    fever: false,
    confused: false, 
    vomiting: false,
    constipated: false
  };
  pain: number=0;
  tired: number=0;
  drowsy: number=0;
  nausea: number=0;
  appetite: number=0;
  breathing: number=0;
  depression: number=0;
  anxiety: number=0;
  wellbeing: number=0;
  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EsassurveyPage');
  }

}
