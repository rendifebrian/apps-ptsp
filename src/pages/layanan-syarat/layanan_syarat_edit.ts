import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Select2Option } from '../extra/select2_options';
import { RestApiProvider } from '../../providers/rest-api';

@IonicPage()
@Component({
  selector: 'page-layanan-syarat',
  templateUrl: 'layanan_syarat_create.html',
})
export class LayananSyaratEditPage {

	table_module:string = "layanan_syarat";

	token = window.localStorage.getItem("token");

	createForm:FormGroup;
	page:string = 'edit';

	data:any;
	content:any;

	layanan_id_label:string = "";

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
      'layanan_id': [
        '',
        Validators.compose([Validators.required])
			],
			
			'layanan_syarat_name': [
        '',
        Validators.compose([Validators.required])
      ],
    });
	}

	editData()
	{
		this.data = {
			module									: this.table_module,
			uuid										: this.content.layanan_syarat_uuid,
			layanan_id							:	this.content.layanan_id,
			layanan_syarat_name			:	this.content.layanan_syarat_name,
		}
		this.layanan_id_label = this.content.layanan_name;
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
