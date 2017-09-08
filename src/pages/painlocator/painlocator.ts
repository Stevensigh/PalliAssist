import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the PainlocatorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-painlocator',
  templateUrl: 'painlocator.html',
})
export class PainlocatorPage {
  personView: string = "frontView";
  


  constructor() {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PainlocatorPage');
  }

}
