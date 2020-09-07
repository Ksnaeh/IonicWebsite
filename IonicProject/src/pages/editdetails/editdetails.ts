import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnquiresProvider } from '../../providers/enquires/enquires';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the EditdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editdetails',
  templateUrl: 'editdetails.html',
})
export class EditdetailsPage {

  enquire: any;

  localStore: any;

  myForm: FormGroup;
  msg: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public builder1: FormBuilder, public userboi: EnquiresProvider, private advarsel: AlertController) {
    this.myForm = this.builder1.group({
      'name': this.navParams.get("name"),
      'adress': '',
      'email': '',
      'phonenumber': ''
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditdetailsPage');
  }

  ionViewWillLoad(){
    console.log('ionicViewWillLoad EditdetailsPage')

    let arr: Array<string> = [];
    let arraddress: Array<string> = [];
    let arremail: Array<string> = [];
    let arrphnumber: Array<string> = [];
    this.userboi.getEnquires().subscribe((data) =>
        {
          console.log(data);
          this.localStore = data;
        
          for(let enqui of this.localStore) {
              arr.push(enqui.name);
              arraddress.push(enqui.address);
              arremail.push(enqui.email);
              arrphnumber.push(enqui.phonenumber);
          }
          console.log(arr);

        for (var i = 0; arr.length-1;i++){
          if (this.navParams.get("name") === arr[i]){
            console.log(this.navParams.get("name"));
            console.log(arr[i]);
            console.log(arrphnumber[i]);
            this.myForm = this.builder1.group({
              'name': arr[i],
              'adress': arraddress[i],
              'email': arremail[i],
              'phonenumber': arrphnumber[i]
              });
            return
          }
          console.log(this.navParams.get("name"));
          console.log(arr[i]);
        }
    });
  }

  clickUpdate() {
    if ( this.myForm.value.email !="" && this.myForm.value.adress !="" && this.myForm.value.phonenumber !=""){
        this.userboi.addEnquires(this.myForm.value.name, this.myForm.value.adress,
        this.myForm.value.email, this.myForm.value.phonenumber);
        this.navCtrl.pop();
   }
   else {
    let advarer = this.advarsel.create({
      title: 'Missing / empty fields',
      subTitle: 'Please make sure you have entered all fields correctly!',
      buttons: ['OK']
    });
    advarer.present();
    console.log("No fields can be empty!");
   }
  }

  clickDelete() {
    this.userboi.deleteContact(this.myForm.value.name);
    this.navCtrl.pop();
  }

}
