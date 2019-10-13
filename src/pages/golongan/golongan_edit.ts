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
  selector: 'page-golongan',
  templateUrl: 'golongan_create.html',
})
export class GolonganEditPage {

	table_module:string = "golongan";

	token = window.localStorage.getItem("token");

	createForm:FormGroup;
	page:string = 'Edit';

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
      'golongan_code': [
        '',
        Validators.compose([Validators.required])
      ],
      'golongan_tingkat': [
        '',
        Validators.compose([Validators.required])
      ],

      'golongan_pangkat': [
        '',
        Validators.compose([Validators.required])
			],
    });
	}

	editData()
	{
		this.data = {
			module						: this.table_module,
			uuid							: this.content.golongan_uuid,
			golongan_code			: this.content.golongan_code,
			golongan_tingkat	:	this.content.golongan_tingkat,
			golongan_pangkat	:	this.content.golongan_pangkat,
		}
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
