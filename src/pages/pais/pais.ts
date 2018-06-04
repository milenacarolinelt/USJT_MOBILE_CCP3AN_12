import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContinentePage } from '../continente/continente';
import { PaisProvider } from '../../providers/pais/pais';

@IonicPage()
@Component({
  selector: 'page-pais',
  templateUrl: 'pais.html',
  providers: [
    PaisProvider
  ]
})
export class PaisPage {
  public items = Array<any>();
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public paisProvider : PaisProvider) {
    this.initializeItems();
  }

  initializeItems() {
    console.log('ionViewDidLoad PaisPage');
      this.paisProvider.getPaises().subscribe(
        data => {
          const response = (data as any);
          console.log("response " +response);
          const objeto_retorno = JSON.parse(response._body);
          this.items = objeto_retorno;
          // console.log("obj " + objeto_retorno)
        }, error => {
          console.log(error)
        }
      )
  }

  getItems(ev) {
    var val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.region.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else{
      this.initializeItems();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaisPage');
  }

}
