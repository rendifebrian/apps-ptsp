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
  selector: 'page-organisasi',
  templateUrl: 'organisasi_create.html',
})
export class OrganisasiCreatePage {

	table_module:string = "organisasi";

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
      'organisasi_name': [
        '',
        Validators.compose([Validators.required])
      ]
    });
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
