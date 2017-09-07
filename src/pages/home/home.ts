import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  videos: any[] = [
    {
      title: 'Girls Day',
      vid: 'http://www.youtube.com/embed/7crt2Ip93VI'
    }
  ]


  constructor(public navCtrl: NavController) {
  }


  async playVideo() {
    try {

    } catch(e) {
      console.error(e);
    }

  }

}
