import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import { MyApp } from './app.component';
import { IndexPage } from '../pages/index/index';
import { BookPage } from '../pages/book/book';
import { TocPage } from '../pages/toc/toc';
import { SettingsPage } from '../pages/settings/settings';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { BookOverviewPage } from '../pages/book-overview/book-overview';

@NgModule({
  declarations: [
    MyApp,
    IndexPage,
    BookPage,
    TocPage,
    SettingsPage,
    ProgressBarComponent,
    BookOverviewPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IndexPage,
    BookPage,
    TocPage,
    SettingsPage,
    BookOverviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
