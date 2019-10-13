import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, ActionSheetController, AlertController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api';
import { GlobalProvider } from '../../providers/global';
import { LayananJenisCreatePage } from './layanan_jenis_create';
import { LayananJenisEditPage } from './layanan_jenis_edit';

/**
 * Generated class for the LayananJenisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-layanan-jenis',
  templateUrl: 'layanan_jenis.html',
})
export class LayananJenisPage {

  table_module:any = 'layanan_jenis';

  token = window.localStorage.getItem("token");

  criteria : any = {
    token : this.token,
  }

  list_data:any;

  constructor(
    public navCtrl        : NavController, 
    public navParams      : NavParams,
    public modalCtrl      : ModalController,
    public viewCtrl       : ViewController,
    public restApi        : RestApiProvider,
    public globalProvider : GlobalProvider,
    public actionSheetCtrl  : ActionSheetController,
    public alertCtrl      : AlertController,
  ) {
    this.listData();
  }

  listData()
  {
    let content = {
      token   : this.criteria.token,
    }
    this.restApi.listData(content, this.table_module).then(result => {
      if (result['message'] !== undefined && result['message'] == 'SUCCESS') 
      {
        this.list_data = result['layanan_jenis'];
      }
      else if (result['message'] !== undefined && result['message'] == 401) 
      {
        this.globalProvider.toastDefault("Session Expired! Please Re-login.", 3000)
      }
    });
  }

  addLayananJenis()
  {
    let modal = this.modalCtrl.create(LayananJenisCreatePage)
    modal.onDidDismiss(()=>{
      this.listData();
    })
    modal.present();
  }

  optionList(list:any)
  {
    const actionSheet = this.actionSheetCtrl.create({
      title: list['layanan_jenis_name'],
      buttons: [
        {
          icon: 'create',
          text: "Edit",
          handler: () => {
            this.edit(list);
          }
        },
        {
          icon: 'trash',
          text: "Delete",
          handler: () => {
            this.deleteBox(list['layanan_jenis_uuid']);
          }
        },
      ],
    });
    actionSheet.present();
  }

  edit(data:any)
  {
    let modal = this.modalCtrl.create(LayananJenisEditPage, {data:data})
    modal.onDidDismiss(()=>{
      this.listData();
    })
    modal.present();
  }

  deleteBox(data_uuid:any)
  {
    this.alertCtrl.create({
      title     : "Delete", 
      subTitle  : "Are you sure delete this data ?", 
      buttons   : [{
        text      : "YES", 
        handler   : () => 
        {
          this.delete(data_uuid);
        }
      }, 
      {
        text      : "NO"
      }]
    }).present();
  }

  delete(data_uuid:any)
  {
    let content = {
      token   : this.criteria.token,
      module  : this.table_module,
      uuid    : data_uuid,
    }
    this.restApi.deleteData(content).then(result => {
      if (result['message'] == "DELETED") 
			{
				this.listData();
			}
    })
  }

  doRefresh(refresher)
  {
    this.criteria.page = 1;
    this.listData();
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }

  dismiss()
  {
    this.viewCtrl.dismiss();
  }

}
