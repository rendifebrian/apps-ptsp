import { Component, enableProdMode, ViewChild } from '@angular/core';
import { Platform, NavController, Nav, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { UserPage } from '../pages/user/user';
import { InstansiPage } from '../pages/instansi/instansi';
import { OrganisasiPage } from '../pages/organisasi/organisasi';
import { GolonganPage } from '../pages/golongan/golongan';
import { GroupPage } from '../pages/group/group';
import { LayananPage } from '../pages/layanan/layanan';
import { LayananJenisPage } from '../pages/layanan_jenis/layanan_jenis';
import { LayananOutputPage } from '../pages/layanan-output/layanan_output';
import { LayananSyaratPage } from '../pages/layanan-syarat/layanan_syarat';

enableProdMode();
@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild('myNav') nav: Nav;
  
  rootPage:any = LoginPage;

  active_menu:string;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public alertCtrl                : AlertController,
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.overlaysWebView(true);
      statusBar.backgroundColorByHexString('#32db64');
      splashScreen.hide();
    });
    // var access_login = window.localStorage.getItem("login_status");
    // if (typeof access_login == undefined || access_login == "" || access_login == null) 
    // {
    //   this.rootPage = LoginPage;
    // }
    // else
    // {
    //   this.rootPage = HomePage;
    // }
  }

  openPage(page:any)
  {
    if (page == '' || page == 'beranda') 
    {
      this.active_menu = 'beranda';
      this.nav.setRoot(HomePage);
    }
    else if (page == 'user') 
    {
      this.active_menu = 'user';
      this.nav.setRoot(UserPage);  
    }
    else if(page == 'instansi')
    {
      this.active_menu = 'instansi';
      this.nav.setRoot(InstansiPage);
    }
    else if(page == 'organisasi')
    {
      this.active_menu = 'organisasi';
      this.nav.setRoot(OrganisasiPage);
    }
    else if(page == 'golongan')
    {
      this.active_menu = 'golongan';
      this.nav.setRoot(GolonganPage);
    }
    else if(page == 'group')
    {
      this.active_menu = 'group';
      this.nav.setRoot(GroupPage);
    }
    else if(page == 'layanan')
    {
      this.active_menu = 'layanan';
      this.nav.setRoot(LayananPage);
    }
    else if(page == 'layanan_jenis')
    {
      this.active_menu = 'layanan_jenis';
      this.nav.setRoot(LayananJenisPage);
    }
    else if(page == 'layanan_output')
    {
      this.active_menu = 'layanan_output';
      this.nav.setRoot(LayananOutputPage);
    }
    else if(page == 'layanan_syarat')
    {
      this.active_menu = 'layanan_syarat';
      this.nav.setRoot(LayananSyaratPage);
    }
  }

  logout()
  {
    let alert = this.alertCtrl.create({
      message: 'Are you sure want to Logout?',
      buttons: [
        {
          text: "No",
          cssClass: "btnAllert-secondary-two",
          role: 'cancel'
        },
        {
        text: "Yes",
        cssClass: "btnAllert-warning-two",
        handler: (user_email) => 
        { 
          window.localStorage.clear();
          this.nav.setRoot(LoginPage);
        }
      },
    ]
    })
    alert.present();
  }

  logoutAuto()
  {
    window.localStorage.clear();
    this.nav.setRoot(LoginPage);
  }
}

