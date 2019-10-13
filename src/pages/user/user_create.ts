import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user_create.html',
})
export class UserCreatePage {

	userForm:FormGroup;

	page:string = "create";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
		public modalCtrl : ModalController,
		public formBuilder: FormBuilder,
  ) {
    this.buildForm();

  }

  buildForm()
  {
    this.userForm = this.formBuilder.group({
      nama_user: ['', Validators.required],
      nip: ['', Validators.required],
      unit_kerja: ['', Validators.required],
      kata_sandi: ['', Validators.required],
      status_user: ['', Validators.required],
    });
  }

  dismiss()
  {
    this.viewCtrl.dismiss();
	}
	
	storeData()
	{
		console.log(this.userForm.value);
		
	}


}
