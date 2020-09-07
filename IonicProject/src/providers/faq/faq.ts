import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from
'angularfire2/firestore';

/*
  Generated class for the FaqProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FaqProvider {

  faqCollectionRef :AngularFirestoreCollection<any>;

  constructor(public http: HttpClient, public firestore: AngularFirestore) {
    this.faqCollectionRef = this.firestore.collection<any>('faq');
  }

  getFAQs() {
    return this.faqCollectionRef.valueChanges();
  }

}
