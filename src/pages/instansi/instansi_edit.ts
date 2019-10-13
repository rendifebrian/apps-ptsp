import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Select2Option } from '../extra/select2_options';
import { RestApiProvider } from '../../providers/rest-api';

/**
 * Generated class for the InstansiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instansi',
  templateUrl: 'instansi_create.html',
})
export class InstansiEditPage {

	table_module:string = "instansi";

	token = window.localStorage.getItem("token");

	createForm:FormGroup;
	page:string = 'edit';

	data:any;
	content:any;
	organisasi_id_label:string="";

  constructor(
    public navCtrl        : NavController, 
    public navParams      : NavParams,
		public modalCtrl      : ModalController,
		public builder				: FormBuilder,
		public viewCtrl				: ViewController,
		public restApi				: RestApiProvider,
  ) {
		this.validateDefined()
		this.content = this.navParams.get("data");
		this.editData();
  }

  validateDefined()
  {  
    this.createForm = this.builder.group({
      'organisasi_id': [
        '',
        Validators.compose([Validators.required])
      ],
      'instansi_name': [
        '',
        Validators.compose([Validators.required])
      ],

      'instansi_address': [
        '',
        Validators.compose([Validators.required])
			],
			
			'instansi_telp': [
        '',
        Validators.compose([Validators.required])
			],
			
			'instansi_faks': [
        '',
        Validators.compose([])
			],
			
			'instansi_web': [
        '',
        Validators.compose([])
			],
			
			'instansi_email': [
        '',
        Validators.compose([])
			],

			'instansi_logo': [
        '',
        Validators.compose([])
			]
    });
	}

	// getData()
	// {
	// 	let content = {
  //     token   : this.token,
	// 		used    : 'organisasi',
	// 		keyword_instansi_id	: this.data_id,
  //   }
  //   console.log(content);
    
  //   this.restApi.listData(content, this.table_module).then(result => {
  //     // this.list_data = result['instansi'];
  //   });
	// }

	editData()
	{
		this.data = {
			module						: this.table_module,
			uuid							: this.content.instansi_uuid,
			organisasi_id			: this.content.organisasi_id,
			instansi_name			:	this.content.instansi_name,
			instansi_address	:	this.content.instansi_address,
			instansi_telp			:	this.content.instansi_telp,
			instansi_faks			:	this.content.instansi_faks,
			instansi_web			:	this.content.instansi_web,
			instansi_email		:	this.content.instansi_email,
			instansi_logo			:	this.content.instansi_logo,
		}
		this.organisasi_id_label = this.content.organisasi_name;
	}

	select2Modal(parent:string = "")
	{
		let modal = this.modalCtrl.create(Select2Option, {
																												from_module: parent,
																											});
    modal.onDidDismiss(data => {
			if (parent == 'instansi_org') 
			{
				this.data.organisasi_id = data.value;
				this.organisasi_id_label = data.label;
			}
    })
    modal.present();
	}

	/* STORE DATA */

	storeData()
	{
		this.restApi.updateData(this.data, this.token).then(result => {
			if (result['message'] == "UPDATED") 
			{
				this.dismiss();
			}
		})
	}

	/* END STORE DATA */


	dismiss()
  {
    this.viewCtrl.dismiss();
  }


}
