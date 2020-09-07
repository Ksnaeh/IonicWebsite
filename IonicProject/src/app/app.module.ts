import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HttpClientModule } from '@angular/common/http';
import { UserProvider } from '../providers/user/user';
import { BookingsProvider } from '../providers/bookings/bookings';
import { LocationsProvider } from '../providers/locations/locations';
import { EnquiresProvider } from '../providers/enquires/enquires';
import { FaqProvider } from '../providers/faq/faq';
import { MusicnewsProvider } from '../providers/musicnews/musicnews';

import { LocationsPage } from '../pages/locations/locations';
import { DetailsPage} from '../pages/details/details';
import { FaqPage} from '../pages/faq/faq';
import { EnquiresPage } from '../pages/enquires/enquires';
import { BookingsPage } from '../pages/bookings/bookings';
import { EditdetailsPage} from '../pages/editdetails/editdetails';
import { AuthenticatePage} from '../pages/authenticate/authenticate';

const config = {
  apiKey: "AIzaSyDEzV3PSL1TA8TXplUDqcnuSy1tdwsDuXM",
  authDomain: "databaseapp1-63f65.firebaseapp.com",
  databaseURL: "https://databaseapp1-63f65.firebaseio.com",
  projectId: "databaseapp1-63f65",
  storageBucket: "databaseapp1-63f65.appspot.com",
  messagingSenderId: "69537320578"
 };


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LocationsPage,
    DetailsPage,
    FaqPage,
    EnquiresPage,
    BookingsPage,
    EditdetailsPage,
    AuthenticatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LocationsPage,
    DetailsPage,
    FaqPage,
    EnquiresPage,
    BookingsPage,
    EditdetailsPage,
    AuthenticatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    BookingsProvider,
    LocationsProvider,
    EnquiresProvider,
    FaqProvider,
    MusicnewsProvider
  ]
})
export class AppModule {}
