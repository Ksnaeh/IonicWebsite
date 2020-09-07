import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from
'angularfire2/firestore';

/*
  Generated class for the EnquiresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EnquiresProvider {

  enquiresCollectionRef :AngularFirestoreCollection<any>;

  constructor(public http: HttpClient, public firestore: AngularFirestore) {
    this.enquiresCollectionRef = this.firestore.collection<any>('enquires');
  }

  getEnquires() {
    return this.enquiresCollectionRef.valueChanges();
  }

  getMatchingEnquires(name: string, phonenum: string) {
    return this.enquiresCollectionRef.valueChanges({name: name, phonenumber: phonenum});
  }

  addEnquires(name: string, adress: string, email: string, phonenum: string){
    this.enquiresCollectionRef.doc(name).set({name: name, address:
   adress, email: email, phonenumber: phonenum});
    }
       
  deleteContact(name: string){
    this.enquiresCollectionRef.doc(name).delete();
  }
}
