import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClaimPage } from './claim';

@NgModule({
  declarations: [
    ClaimPage,
  ],
  imports: [
    IonicPageModule.forChild(ClaimPage),
  ],
})
export class ClaimPageModule {}
