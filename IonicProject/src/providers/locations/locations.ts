import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from
'angularfire2/firestore';

/*
  Generated class for the LocationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationsProvider {

  locationsCollectionRef :AngularFirestoreCollection<any>;

  constructor(public http: HttpClient, public firestore: AngularFirestore) {
    this.locationsCollectionRef = this.firestore.collection<any>('Locations');
  }

  getLocations() {
    return this.locationsCollectionRef.valueChanges();
    }

}
