import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api';
import { HomePage } from '../home/home';
import { GlobalProvider } from '../../providers/global';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  criteria:any = {
    // password : "",
  }

  constructor(
    public navCtrl: NavController,
    public restApiProvider      : RestApiProvider,
    public globalProvider       : GlobalProvider,
    public menuCtrl             : MenuController,
  ) {
    this.menuCtrl.enable(false, "myMenu");
  }

  login(form)
  {
    this.restApiProvider.auth(form.value).then(result => {
      if (result['token'] !== undefined && result['token'] !== "") 
      {
        window.localStorage.setItem("login_status", JSON.stringify(true))
        window.localStorage.setItem("token", result['token'])
        this.navCtrl.setRoot(HomePage); 
      }
      else if (typeof result['status'] !== undefined && result['status'] == 500) 
      {
        this.globalProvider.toastDefault("Wrong Password!");
      }
    })
  }

}
