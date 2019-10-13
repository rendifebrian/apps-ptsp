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
export class LayananSyaratCreatePage {

	table_module:string = "layanan_syarat";

	token = window.localStorage.getItem("token");

	createForm:FormGroup;
	page:string = 'create';

	criteria:any = {
		// token : this.token,
		module : this.table_module,
	}

	data:any = this.criteria;
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

	select2Modal(parent:string = "")
	{
		let modal = this.modalCtrl.create(Select2Option, {
																												from_module: parent,
																											});
    modal.onDidDismiss(data => {
			if (parent == 'layanan') 
			{
				this.data.layanan_id = data.value;
				this.layanan_id_label = data.label;
			}
    })
    modal.present();
	}

	/* STORE DATA */

	storeData()
	{
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
