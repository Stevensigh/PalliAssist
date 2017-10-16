import { NgModule, OnInit, OnDestroy } from '@angular/core';

import { IonicPageModule,NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { MessengerPage } from './messenger';
import { Keyboard } from '@ionic-native/keyboard';


@NgModule({
  declarations: [
    MessengerPage,
  ],
  imports: [
    IonicPageModule.forChild(MessengerPage),
  ],
})
export class MessengerPageModule {
  chatText: string;
  chatMessages: Array<string>;
  textMaxLength:number=400;
  
}
