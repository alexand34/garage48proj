import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BookPage } from './../book/book';
import { BookOverviewPage } from './../book-overview/book-overview';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ModalController, ViewController } from 'ionic-angular';
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

@Component({
  selector: 'index',
  templateUrl: 'index.html'
})

export class IndexPage {
  books: {}[];
  character: {}[];
  progress: number;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient,
    public modalCtrl: ModalController) {
    this.books = [];
    this.character = [];
    let book1 = new Book();
    book1.label = "Moby Dick";
    book1.file = "assets/books/moby-dick/";
    book1.imgName = "assets/icon/moby-dick.png"
    this.books.push(book1);
    this.progress = 74;
    let book2 = new Book();
    book2.label = "Alice in Wonderland";
    book2.file = "assets/books/allice-in-wonderland/";
    book2.imgName = "assets/icon/allice-in-wonderland.ico"
    this.books.push(book2);

    let book3 = new Book();
    book3.label = "Best Book Ever";
    book3.file = "assets/books/Book.epub"
    book3.imgName = "assets/icon/allice-in-wonderland.ico"
    this.books.push(book3);
    this.books.push(book2);
    this.books.push(book2);
    this.books.push(book2);
  }


  show(book) {
    console.log('show', book);
    let profileModal = this.modalCtrl.create(BookOverviewPage, {data : book});
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }
}

