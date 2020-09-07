import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  title: string;
  image: string;
  dato: string;
  deskripsjon: string;
  link: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get("NewsTitle");
    this.image = navParams.get("NewsImage");
    this.dato = navParams.get("NewsDate");
    this.deskripsjon = navParams.get("NewsDesc");
    this.link = navParams.get("NewsLink");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
