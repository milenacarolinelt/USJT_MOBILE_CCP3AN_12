import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContinentePage } from './continente';

@NgModule({
  declarations: [
    ContinentePage,
  ],
  imports: [
    IonicPageModule.forChild(ContinentePage),
  ],
})
export class ContinentePageModule {}
