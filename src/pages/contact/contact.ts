import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
  backbtn(){
    this.navCtrl.pop();
  }
  homeRoot(){
    this.navCtrl.setRoot(HomePage);
  }

  sendAlert() {
    let alert = this.alertCtrl.create({
      title: 'Request Sent!',
      subTitle: 'Remember to check your messages incase of further contact from your employer',
      buttons: ['Dismiss']
    });
    alert.present();
    this.navCtrl.setRoot(HomePage);
  }
}
