import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnquiresProvider } from '../../providers/enquires/enquires';
import { EditdetailsPage } from '../editdetails/editdetails';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the AuthenticatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-authenticate',
  templateUrl: 'authenticate.html',
})
export class AuthenticatePage {

  stack: any;

  name1: any;

  myForm: FormGroup;


  constructor(public navCtrl: NavController, public build: FormBuilder, public navParams: NavParams, public retrieveenquire: EnquiresProvider, private advarsel: AlertController) {
    retrieveenquire.getEnquires().subscribe((data) =>
    {this.stack = data;});

    this.myForm = build.group({
      'name': '',
      'phonenumber': ''
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthenticatePage');
  }

  clickAuth(username){
    username = username
    let arr: Array<string> = [];
    let ph: Array<string> = [];
    if (this.myForm.value.name != "" && this.myForm.value.phonenumber != ""){
      this.retrieveenquire.getEnquires().subscribe((data) =>
        {
          console.log(data);
          this.name1 = data;
        
          for(let enqui of this.name1) {
              arr.push(enqui.name);
              ph.push(enqui.phonenumber);
          }
          console.log(arr);
          console.log(ph);

        for (var i = 0; arr.length-1; i++){
          if (this.myForm.value.name === arr[i] && this.myForm.value.phonenumber === ph[i]){
            console.log("Authentication successful!");
            this.myForm.reset()
            return this.navCtrl.push(EditdetailsPage, { name: username });
          }
          if (i == arr.length-1){
              let advarer = this.advarsel.create({
                title: 'Incorrect contact',
                subTitle: 'Wrong name or phone number / contact does not exist',
                buttons: ['OK']
              });
            advarer.present();
            return console.log("Authentication failed");
          }
          console.log(this.myForm.value.name);
          console.log(this.myForm.value.phonenumber);
          console.log(arr[i]);
          console.log(ph[i]);
        }
      });
        
    }
    else{
      let advarer = this.advarsel.create({
        title: 'Missing / Empty fields!',
        subTitle: 'Please enter your name and phone number',
        buttons: ['OK']
      });
    advarer.present();
    console.log("Missing/Empty fields!");
    }
  }

  goBack(){
    this.navCtrl.pop();
  }

}
