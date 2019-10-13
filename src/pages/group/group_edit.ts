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
  selector: 'page-group',
  templateUrl: 'group_create.html',
})
export class GroupEditPage {

	table_module:string = "groups";

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

	editData()
	{
		this.data = {
			module							: this.table_module,
			uuid								: this.content.groups_uuid,
			groups_name					: this.content.groups_name,
			groups_description	:	this.content.groups_description,
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
