import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AilmentPage } from '../ailment/ailment';
import { ClaimPage } from '../claim/claim';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  ailmentpageshow(){
    this.navCtrl.setRoot(AilmentPage);
  }
  claimpageshow(){
    this.navCtrl.setRoot(ClaimPage);
  }
  loginpageshow(){
    this.navCtrl.setRoot(LoginPage);
  } 
}
