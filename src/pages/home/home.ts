import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  update = 'v-0001';

  assetPath = ''
  constructor(public navCtrl: NavController) {
    console.log("/////////////////// : "+this.update)
    this.assetPath=localStorage.getItem('assetPath');
  }

}
