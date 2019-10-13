import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {

  constructor(
    public http: HttpClient,
    public toastCtrl : ToastController,
  ) {
  }


  config(name:string)
  {
    var config = { 
      "apiMode"         : 0, 
      "apiUrlOnline"    : "live.live.live",
      "apiUrlOffline"   : "http://localhost/api-ptsp/public/api/",
    }

    return config[name];
  }

  toastDefault(message: any, duration:number = 1000) // success
  {
    this.toastCtrl.create({
        message : message, 
        duration: duration,
        cssClass: "toast-default",
    }).present();
  }

}
