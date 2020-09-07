import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnquiresProvider } from '../../providers/enquires/enquires';
import { EditdetailsPage } from '../editdetails/editdetails';
import { AuthenticatePage } from '../authenticate/authenticate';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the EnquiresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enquires',
  templateUrl: 'enquires.html',
})
export class EnquiresPage {

  myForm: FormGroup;
  msg: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ikealand: FormBuilder, public ikea: EnquiresProvider, private advarsel: AlertController) {
    this.myForm = ikealand.group({
      'name': '',
      'adress': '',
      'email': '',
      'phonenumber': ''
    });
  }

  clickInsert () {
    if ( this.myForm.value.username != "" && this.myForm.value.adress != "" && this.myForm.value.email !="" && this.myForm.value.phonenumber !=""){

      this.ikea.addEnquires(this.myForm.value.name, this.myForm.value.adress, this.myForm.value.email,
      this.myForm.value.phonenumber);
      this.myForm.reset();
      this.msg = "Enquiry has been sent, thank you!";
      }
      else {
        let advarer = this.advarsel.create({
          title: 'Missing / Empty fields',
          subTitle: 'Please enter all fields, thank you!',
          buttons: ['OK']
        });
      advarer.present();
      }
  }

  viewContact(){
    this.navCtrl.push (AuthenticatePage);
    }
}
