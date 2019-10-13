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
export class InstansiCreatePage {

	table_module:string = "instansi";

	token = window.localStorage.getItem("token");

	createForm:FormGroup;
	page:string = 'create';

	criteria:any = {
		// token : this.token,
		module : this.table_module,
	}

	data:any = this.criteria;
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
		console.log(this.data)
		this.restApi.saveData(this.data, this.token).then(result => {
			if (result['message'] == "CREATED") 
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
