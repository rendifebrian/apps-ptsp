import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserPage } from '../user/user';
import { IdentitasSatkerPage } from '../identitas-satker/identitas-satker';
import { UnitPengolahPage } from '../unit-pengolah/unit-pengolah';
import { NamaLayananPage } from '../nama-layanan/nama-layanan';
import { SyaratLayananPage } from '../syarat-layanan/syarat-layanan';
import { InputDataLayananPage } from '../input-data-layanan/input-data-layanan';
import { InputPenyelesaianLayananPage } from '../input-penyelesaian-layanan/input-penyelesaian-layanan';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public menuCtrl : MenuController,
  ) {
    this.menuCtrl.enable(true, "myMenu");
  }

  logout()
  {
    window.localStorage.clear();
    this.navCtrl.setRoot(LoginPage);
  }

  user()
  {
    this.navCtrl.push(UserPage).then(() => {
      this.navCtrl.getActive().onDidDismiss(data => {
        console.log("dismiss")
      })
    })
  }

  iden_satker()
  {
    this.navCtrl.push(IdentitasSatkerPage).then(() => {
      this.navCtrl.getActive().onDidDismiss(data => {
        console.log("dismiss")
      })
    })
  }

  unit_pengolah()
  {
    this.navCtrl.push(UnitPengolahPage).then(() => {
      this.navCtrl.getActive().onDidDismiss(data => {
        console.log("dismiss")
      })
    })
  }

  nama_layanan()
  {
    this.navCtrl.push(NamaLayananPage).then(() => {
      this.navCtrl.getActive().onDidDismiss(data => {
        console.log("dismiss")
      })
    })
  }

  syarat_layanan()
  {
    this.navCtrl.push(SyaratLayananPage).then(() => {
      this.navCtrl.getActive().onDidDismiss(data => {
        console.log("dismiss")
      })
    })
  }

  input_data_layanan()
  {
    this.navCtrl.push(InputDataLayananPage);
  }

  input_data_penyelesaian()
  {
    this.navCtrl.push(InputPenyelesaianLayananPage);
  }

}
