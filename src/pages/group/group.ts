import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, ActionSheetController, AlertController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api';
import { GlobalProvider } from '../../providers/global';
import { GroupCreatePage } from './group_create';
import { GroupEditPage } from './group_edit';

/**
 * Generated class for the GroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {

  table_module:any = 'groups';

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
        this.list_data = result['groups'];
        
      }
      else if (result['message'] !== undefined && result['message'] == 401) 
      {
        this.globalProvider.toastDefault("Session Expired! Please Re-login.", 3000)
      }
    });
  }

  addGroup()
  {
    let modal = this.modalCtrl.create(GroupCreatePage)
    modal.onDidDismiss(()=>{
      this.listData();
    })
    modal.present();
  }

  optionList(list:any)
  {
    const actionSheet = this.actionSheetCtrl.create({
      title: list['groups_name'],
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
            this.deleteBox(list['groups_uuid']);
          }
        },
      ],
    });
    actionSheet.present();
  }

  edit(data:any)
  {
    let modal = this.modalCtrl.create(GroupEditPage, {data:data})
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
