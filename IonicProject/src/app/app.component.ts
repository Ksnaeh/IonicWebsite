import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LocationsPage } from '../pages/locations/locations';
import { DetailsPage} from '../pages/details/details';
import { FaqPage} from '../pages/faq/faq';
import { EnquiresPage } from '../pages/enquires/enquires';
import { BookingsPage } from '../pages/bookings/bookings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  go_to_home(Page){
    this.nav.setRoot(HomePage);
  }

  go_to_courses(Page){
    this.nav.setRoot(BookingsPage);
  }

  go_to_faq(Page){
    this.nav.setRoot(FaqPage);
  }

  go_to_enquires(Page){
    this.nav.setRoot(EnquiresPage);
  }

  go_to_locations(Page){
    this.nav.setRoot(LocationsPage);
  }
}

