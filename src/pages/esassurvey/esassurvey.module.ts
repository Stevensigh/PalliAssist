import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EsassurveyPage } from './esassurvey';

@NgModule({
  declarations: [
    EsassurveyPage,
  ],
  imports: [
    IonicPageModule.forChild(EsassurveyPage),
  ],
  entryComponents: [
    EsassurveyPage,
  ]
})
export class EsassurveyPageModule {}
