import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from
'angularfire2/firestore';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  usersCollectionRef :AngularFirestoreCollection<any>;

  constructor(public http: HttpClient, public firestore: AngularFirestore) {
    this.usersCollectionRef = this.firestore.collection<any>('NewsMusic');
  }

  // addUpdateContact(name: string, password: string, email: string){
  //   this.usersCollectionRef.doc(name).set({username: name, passwort: password, email:
  //  email});
  //   }
   
  //   deleteContact(name: string){
  //   this.usersCollectionRef.doc(name).delete();
  //   }
   
  getNews() {
    return this.usersCollectionRef.valueChanges();
  }

}
