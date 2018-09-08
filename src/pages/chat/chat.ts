import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController  } from 'ionic-angular';
import { ClaimPage } from '../claim/claim';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  backbtn(){
    this.navCtrl.setRoot(ClaimPage);
  }
  helpbtn(){
    let alert = this.alertCtrl.create({
      subTitle: `Send conversation to a government agent?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: () => {
            console.log('Send clicked');
          }
        }
      ]
    });
    alert.present();
    this.viewCtrl.dismiss();
  }
}
