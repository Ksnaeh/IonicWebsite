import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FaqProvider } from '../../providers/faq/faq';

/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {

  faqs: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public faqprovide: FaqProvider) {
    faqprovide.getFAQs().subscribe((data) =>
    {this.faqs = data;});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }

  viewFAQs(ans, ques){

  }

}
