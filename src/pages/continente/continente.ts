import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContinentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-continente',
  templateUrl: 'continente.html',
})
export class ContinentePage {
  items: { 'continente': string; }[];

  continentes() {
    this.items = [
      {'continente' : 'Asia'},
      {'continente' : 'Africa'},
      {'continente' : 'Europa'},
      {'continente' : 'América'},
      {'continente' : 'Oceania'}
    ];
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.continentes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaisPage');
  }
}
