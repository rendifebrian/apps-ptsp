import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Select2Option } from '../extra/select2_options';
import { RestApiProvider } from '../../providers/rest-api';

@IonicPage()
@Component({
  selector: 'page-layanan-jenis',
  templateUrl: 'layanan_jenis_create.html',
})
export class LayananJenisEditPage {

	table_module:string = "layanan_jenis";

	token = window.localStorage.getItem("token");

	createForm:FormGroup;
	page:string = 'edit';

	data:any;
	content:any;

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
      'layanan_jenis_name': [
        '',
        Validators.compose([Validators.required])
      ],
    });
	}

	editData()
	{
		this.data = {
			module									: this.table_module,
			uuid										: this.content.layanan_jenis_uuid,
			layanan_jenis_name			:	this.content.layanan_jenis_name,
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
