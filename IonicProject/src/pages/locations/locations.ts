import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationsProvider } from '../../providers/locations/locations';
/**
 * Generated class for the LocationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
})
export class LocationsPage {

  locations: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public locationprovide: LocationsProvider) {
    locationprovide.getLocations().subscribe((data) =>
    {this.locations = data;});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationsPage');
  }

  viewBranches(adress, lokasjon, opening, closing){

  }

}
