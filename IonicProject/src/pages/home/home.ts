import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  news: any

  constructor(public navCtrl: NavController,public newsprovide: UserProvider) {

    newsprovide.getNews().subscribe((data) => {this.news = data;})
  }


  viewNewsDetails(newsname, newsdate, newsdesc, newsimage, newslink){
    this.navCtrl.push(DetailsPage, {NewsTitle: newsname, NewsDate: newsdate, NewsDesc: newsdesc,  NewsImage: newsimage, NewsLink: newslink});
  }

}
