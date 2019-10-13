import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global';
import { RestApiProvider } from '../../providers/rest-api';

/**
 * Generated class for the InputDataLayananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-option',
  templateUrl: 'select2_options.html',
})
export class Select2Option {

  token = window.localStorage.getItem("token");

	from_module:any;
  title_module:any;

  list_data:any;
  
  criteria : any = {
    token : this.token,
  }

  constructor(
     public navCtrl: NavController, 
     public navParams: NavParams, 
     public modalCtrl : ModalController, 
		 public viewCtrl : ViewController,
     public globalProvider : GlobalProvider,
     public restApi : RestApiProvider,
  ) {
		this.from_module = this.navParams.get("from_module");
		if (this.from_module == 'penyelesaian_layanan') 
		{
			this.title_module = "Data Layanan";
    }
    else if (this.from_module == 'instansi_org') 
    {
      this.title_module = "Induk Organisasi";
      this.listOrg();
    }
    else if (this.from_module == 'layanan_jenis') 
    {
      this.title_module = "Jenis Layanan";
      this.listLayananJenis();
    }
    else if (this.from_module == 'layanan_output') 
    {
      this.title_module = "Output Layanan";
      this.listLayananOutput();
    }
    else if (this.from_module == 'layanan') 
    {
      this.title_module = "Layanan";
      this.listLayanan();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputDataLayananPage');
  }

  setDataOption(data)
  {
		this.viewCtrl.dismiss(data);
  }

  listOrg()
  {
    let module = 'organisasi';
    let content = {
      token : this.criteria.token,
    }
    this.restApi.listData(content, module).then(result => {
      if (typeof result['message'] !== undefined && result['message'] == "SUCCESS") 
      {
        this.list_data = result['organisasi'];  
      }
    })
  }

  listLayananJenis()
  {
    let module = 'layanan_jenis';
    let content = {
      token : this.criteria.token,
    }
    this.restApi.listData(content, module).then(result => {
      if (typeof result['message'] !== undefined && result['message'] == "SUCCESS") 
      {
        this.list_data = result['layanan_jenis'];  
      }
    })
  }

  listLayananOutput()
  {
    let module = 'layanan_output';
    let content = {
      token : this.criteria.token,
    }
    this.restApi.listData(content, module).then(result => {
      if (typeof result['message'] !== undefined && result['message'] == "SUCCESS") 
      {
        this.list_data = result['layanan_output'];  
      }
    })
  }

  listLayanan()
  {
    let module = 'layanan';
    let content = {
      token : this.criteria.token,
    }
    this.restApi.listData(content, module).then(result => {
      if (typeof result['message'] !== undefined && result['message'] == "SUCCESS") 
      {
        this.list_data = result['layanan'];  
      }
    })
  }

  dismiss(label:any="", value:any="")
  {
    let data = {label : label , value : value};
    this.viewCtrl.dismiss(data);
  }


}
