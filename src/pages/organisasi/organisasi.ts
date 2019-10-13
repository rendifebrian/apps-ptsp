import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ActionSheetController, AlertController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api';
import { OrganisasiCreatePage } from './organisasi_create';
import { OrganisasiEditPage } from './organisasi_edit';

/**
 * Generated class for the OrganisasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-organisasi',
  templateUrl: 'organisasi.html',
})
export class OrganisasiPage {

  table_module:any = 'organisasi';

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
    public actionSheetCtrl : ActionSheetController,
    public alertCtrl      : AlertController,
  ) {
    this.listData();
  }

  listData()
  {
    let content = {
      token : this.criteria.token,
    }
    this.restApi.listData(content, this.table_module).then(result => {
      if (typeof result['message'] !== undefined && result['message'] == "SUCCESS") 
      {
        this.list_data = result['organisasi'];  
      }
    })
  }

  addOrg()
  {
    let modal = this.modalCtrl.create(OrganisasiCreatePage)
    modal.onDidDismiss(()=>{
      this.listData();
    })
    modal.present();
  }

  optionList(list:any)
  {
    const actionSheet = this.actionSheetCtrl.create({
      title: list['organisasi_name'],
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
            this.deleteBox(list['organisasi_uuid']);
          }
        },
      ],
    });
    actionSheet.present();
  }

  edit(data:any)
  {
    let modal = this.modalCtrl.create(OrganisasiEditPage, {data:data})
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
