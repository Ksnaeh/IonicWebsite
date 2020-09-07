import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from
'angularfire2/firestore';

/*
  Generated class for the BookingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookingsProvider {

  bookingsCollectionRef :AngularFirestoreCollection<any>;

  constructor(public http: HttpClient, public firestore: AngularFirestore) {
    this.bookingsCollectionRef = this.firestore.collection<any>('Bookings');
  }

  getBookings() {
    return this.bookingsCollectionRef.valueChanges();
  }
}
