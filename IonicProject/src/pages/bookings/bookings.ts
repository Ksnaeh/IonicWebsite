import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingsProvider } from '../../providers/bookings/bookings';

/**
 * Generated class for the BookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookings',
  templateUrl: 'bookings.html',
})
export class BookingsPage {

  bookings: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public bookprovide: BookingsProvider) {
    bookprovide.getBookings().subscribe((data) =>
{this.bookings = data;}
);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingsPage');
  }

  viewCourses(name, lessondur, lessonloc, lessoncos, lessonboo){
      
  }

}
