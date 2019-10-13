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
export class LayananEditPage {

	table_module:string = "layanan";

	token = window.localStorage.getItem("token");

	createForm:FormGroup;
	page:string = 'edit';

	data:any;
	content:any;
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
		this.content = this.navParams.get("data");
		this.editData();
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

	editData()
	{
		this.data = {
			module									: this.table_module,
			uuid										: this.content.layanan_uuid,
			layanan_name						:	this.content.layanan_name,
			layanan_durasi					:	this.content.layanan_durasi,
			layanan_satuan_durasi		:	this.content.layanan_satuan_durasi,
			layanan_biaya						: this.content.layanan_biaya,
			layanan_status					: this.content.layanan_status,
			layanan_jenis_id				: this.content.layanan_jenis_id,
			layanan_output_id				: this.content.layanan_output_id,
		}
		this.layanan_jenis_id_label = this.content.layanan_jenis_name;
		this.layanan_output_id_label = this.content.layanan_output_name;
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
