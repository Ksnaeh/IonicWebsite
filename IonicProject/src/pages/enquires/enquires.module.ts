import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnquiresPage } from './enquires';

@NgModule({
  declarations: [
    EnquiresPage,
  ],
  imports: [
    IonicPageModule.forChild(EnquiresPage),
  ],
})
export class EnquiresPageModule {}
