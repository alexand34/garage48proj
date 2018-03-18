import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BookPage } from './../book/book';
import { BookOverviewPage } from './../book-overview/book-overview';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ModalController, ViewController } from 'ionic-angular';
import { NgClass } from '@angular/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export class Book {
  label: string;
  file: string;
  imgName: string;
}

export class Character {
  name: string;
  id: number;
  position: number;
}

export class Owl {
  isPicked: boolean;
}

@Component({
  selector: 'index',
  templateUrl: 'index.html'
})

export class IndexPage {
  books: {}[];
  character: {}[];
  progress: number;
  owlsOne: {}[];
  owlsTwo: {}[];
  owlsThree: {}[];
  olwCoins: number;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient,
    public modalCtrl: ModalController) {
    this.books = [];
    this.character = [];
    let book1 = new Book();
    book1.file = "assets/books/moby-dick/";
    book1.imgName = "assets/imgs/book1.jpg"
    this.books.push(book1);
    this.progress = 74;
    let book2 = new Book();
    book2.file = "assets/books/Book.epub";
    book2.imgName = "assets/imgs/book2.jpg"
    this.books.push(book2);

    let book3 = new Book();
    book3.file = "assets/books/allice-in-wonderland/"
    book3.imgName = "assets/imgs/alice.jpg"
    this.books.push(book3);

    let book4 = new Book();
    book4.file = "assets/books/Book.epub";
    book4.imgName = "assets/imgs/book3.jpg"
    this.books.push(book4);

    let book5 = new Book();
    book5.file = "assets/books/Book.epub";
    book5.imgName = "assets/imgs/book4.jpg"
    this.books.push(book5);

    this.owlsOne = [];
    this.owlsTwo = [];
    this.owlsThree = [];
    this.olwCoins = 0;
    this.fillOwls();
  }

  addCoins(owl){
    if(this.olwCoins > 0){
      owl.isPicked = true;
      this.olwCoins--;
    }
  }

  fillOwls(){
    let owl = new Owl();
    owl.isPicked = true;
    this.owlsOne.push(owl);

    let owl2 = new Owl();
    owl2.isPicked = true;
    this.owlsOne.push(owl2);

    let owl3 = new Owl();
    owl3.isPicked = false;
    this.owlsOne.push(owl3);

    let owl4 = new Owl();
    owl4.isPicked = false;
    this.owlsOne.push(owl4)
    

    /**---------------------------- */
    let owlq = new Owl();
    owlq.isPicked = true;
    this.owlsTwo.push(owlq);

    let owlw = new Owl();
    owlw.isPicked = true;
    this.owlsTwo.push(owlw);

    let owle = new Owl();
    owle.isPicked = false;
    this.owlsTwo.push(owle);
    /**---------------------------- */

    let owlz = new Owl();
    owlz.isPicked = false;
    this.owlsThree.push(owlz);

    let owlx = new Owl();
    owlx.isPicked = false;
    this.owlsThree.push(owlx);

    let owlc = new Owl();
    owlc.isPicked = false;
    this.owlsThree.push(owlc);
  }

  show(book) {
    console.log('show', book);
    let profileModal = this.modalCtrl.create(BookOverviewPage, { data: book });
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }
}

