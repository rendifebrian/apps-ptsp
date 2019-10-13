import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Select2Option } from '../extra/select2_options';
import { RestApiProvider } from '../../providers/rest-api';

@IonicPage()
@Component({
  selector: 'page-layanan',
  templateUrl: 'layanan_create.html',
})
export class LayananCreatePage {

	table_module:string = "layanan";

	token = window.localStorage.getItem("token");

	createForm:FormGroup;
	page:string = 'create';

	criteria:any = {
		// token : this.token,
		module : this.table_module,
	}

	data:any = this.criteria;
	layanan_jenis_id_label:string="";
	layanan_output_id_label:string="";

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
      'layanan_name': [
        '',
        Validators.compose([Validators.required])
      ],
      'layanan_durasi': [
        '',
        Validators.compose([Validators.required])
      ],

      'layanan_satuan_durasi': [
        '',
        Validators.compose([Validators.required])
			],
			
			'layanan_biaya': [
        '',
        Validators.compose([Validators.required])
			],
			
			'layanan_status': [
        '',
        Validators.compose([Validators.required])
			],
			
			'layanan_jenis_id': [
        '',
        Validators.compose([])
			],
			
			'layanan_output_id': [
        '',
        Validators.compose([])
			],

    });
	}

	select2Modal(parent:string = "")
	{
		let modal = this.modalCtrl.create(Select2Option, {
																												from_module: parent,
																											});
    modal.onDidDismiss(data => {
			if (parent == 'layanan_jenis') 
			{
				this.data.layanan_jenis_id = data.value;
				this.layanan_jenis_id_label = data.label;
			}
			else if (parent == 'layanan_output') 
			{
				this.data.layanan_output_id = data.value;
				this.layanan_output_id_label = data.label;
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
