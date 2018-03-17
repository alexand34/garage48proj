import { Component } from '@angular/core';
import { ModalController, ViewController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { BookPage } from '../book/book';
/**
 * Generated class for the BookOverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var ePub: any;

@Component({
  selector: 'page-book-overview',
  templateUrl: 'book-overview.html',
})
export class BookOverviewPage {
  book: any;
  constructor(public viewCtrl: ViewController,public navCtrl: NavController) {
    this.book = viewCtrl.data.data;
  }

  ionViewDidLoad() {

  }
  show(book) {
    this.navCtrl.push(BookPage, {
      book: book
    });
    this.dismiss();
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
