import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

import {ServiciofireService} from './serviciofire.service';

import { ToastController } from '@ionic/angular';


const config = {
  apiKey: "AIzaSyCPs3_60jvM5UcNi7AKTz6w_xSCPg-zxX0",
  authDomain: "mibase1.firebaseapp.com",
  databaseURL: "https://mibase1.firebaseio.com",
  projectId: "mibase1",
  storageBucket: "mibase1.appspot.com",
  messagingSenderId: "487330195395"
};


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})


export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,

    private fcm: ServiciofireService,
   
    public toastController: ToastController
  ) {
    this.initializeApp();
  }


  private async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 3000
    });
    toast.present();
  }

  private notificationSetup() {
    this.fcm.getToken();
    this.fcm.onNotifications().subscribe(
      (msg) => {
        if (this.platform.is('ios')) {
          this.presentToast(msg.aps.alert);
        } else {
          this.presentToast(msg.body);
        }
      });
  }

 

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    //firebase.initializeApp(config);
  }
}
