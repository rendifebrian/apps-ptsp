import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, ActionSheetController, AlertController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api';
import { GlobalProvider } from '../../providers/global';
import { LayananSyaratEditPage } from './layanan_syarat_edit';
import { LayananSyaratCreatePage } from './layanan_syarat_create';

@IonicPage()
@Component({
  selector: 'page-layanan-syarat',
  templateUrl: 'layanan_syarat.html',
})
export class LayananSyaratPage {

  table_module:any = 'layanan_syarat';

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
      used    : 'layanan',
    }
    this.restApi.listData(content, this.table_module).then(result => {
      if (result['message'] !== undefined && result['message'] == 'SUCCESS') 
      {
        this.list_data = result['layanan_syarat'];
      }
      else if (result['message'] !== undefined && result['message'] == 401) 
      {
        this.globalProvider.toastDefault("Session Expired! Please Re-login.", 3000)
      }
    });
  }

  addLayananSyarat()
  {
    let modal = this.modalCtrl.create(LayananSyaratCreatePage)
    modal.onDidDismiss(()=>{
      this.listData();
    })
    modal.present();
  }

  optionList(list:any)
  {
    const actionSheet = this.actionSheetCtrl.create({
      title: list['layanan_syarat_name'],
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
            this.deleteBox(list['layanan_syarat_uuid']);
          }
        },
      ],
    });
    actionSheet.present();
  }

  edit(data:any)
  {
    let modal = this.modalCtrl.create(LayananSyaratEditPage, {data:data})
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
