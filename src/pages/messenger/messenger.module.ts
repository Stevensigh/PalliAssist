import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessengerPage } from './messenger';

@NgModule({
  declarations: [
    MessengerPage,
  ],
  imports: [
    IonicPageModule.forChild(MessengerPage),
  ],
})
export class MessengerPageModule {}
