import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Select2Option } from '../extra/select2_options';
import { RestApiProvider } from '../../providers/rest-api';

@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group_create.html',
})
export class GroupCreatePage {

	table_module:string = "groups";

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
      'groups_name': [
        '',
        Validators.compose([Validators.required])
      ],
      'groups_description': [
        '',
        Validators.compose([])
      ],
    });
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
