import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ChatPage } from '../chat/chat';

/**
 * Generated class for the ClaimPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-claim',
  templateUrl: 'claim.html',
})
export class ClaimPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClaimPage');
  }
  backbtn(){
    this.navCtrl.setRoot(HomePage);
  }
  chatpageshow(){
    this.navCtrl.push(ChatPage);
  }
 
}
