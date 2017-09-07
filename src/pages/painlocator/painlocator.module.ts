import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PainlocatorPage } from './painlocator';

@NgModule({
  declarations: [
    PainlocatorPage,
  ],
  imports: [
    IonicPageModule.forChild(PainlocatorPage),
  ],
})
export class PainlocatorPageModule {}
