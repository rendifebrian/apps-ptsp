import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, MenuController } from 'ionic-angular';
import { UserCreatePage } from './user_create';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl : ModalController,
    public menuCtrl : MenuController,
  ) {
    this.menuCtrl.enable(true, "myMenu");
  }

  dismiss()
  {
    this.viewCtrl.dismiss();
  }

  addUser()
  {
    this.modalCtrl.create(UserCreatePage).present();
  }

}
