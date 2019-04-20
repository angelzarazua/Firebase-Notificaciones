import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';


var config = {
  apiKey: "AIzaSyCPs3_60jvM5UcNi7AKTz6w_xSCPg-zxX0",
  authDomain: "mibase1.firebaseapp.com",
  databaseURL: "https://mibase1.firebaseio.com",
  projectId: "mibase1",
  storageBucket: "mibase1.appspot.com",
  messagingSenderId: "487330195395"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule
    
    ],
  providers: [
    Firebase,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
