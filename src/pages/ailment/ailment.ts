import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatisticsPage } from '../statistics/statistics';
import { HomePage } from '../home/home';

/**
 * Generated class for the AilmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ailment',
  templateUrl: 'ailment.html',
})
export class AilmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AilmentPage');
  }
  statisticspageshow(){
    this.navCtrl.push(StatisticsPage);
  }
  backbtn(){
    this.navCtrl.setRoot(HomePage);
  }

}
