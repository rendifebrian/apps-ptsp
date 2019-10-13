webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_api__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, restApiProvider, globalProvider, menuCtrl) {
        this.navCtrl = navCtrl;
        this.restApiProvider = restApiProvider;
        this.globalProvider = globalProvider;
        this.menuCtrl = menuCtrl;
        this.criteria = {};
        this.menuCtrl.enable(false, "myMenu");
    }
    LoginPage.prototype.login = function (form) {
        var _this = this;
        this.restApiProvider.auth(form.value).then(function (result) {
            if (result['token'] !== undefined && result['token'] !== "") {
                window.localStorage.setItem("login_status", JSON.stringify(true));
                window.localStorage.setItem("token", result['token']);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
            else if (typeof result['status'] !== undefined && result['status'] == 500) {
                _this.globalProvider.toastDefault("Wrong Password!");
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\login\login.html"*/'<ion-content>\n\n\n\n	<div class="wrapper-login">\n\n\n\n		<h1 ion-text text-center class="login-h1">Login</h1>\n\n\n\n		<form #form="ngForm" (ngSubmit)="login(form)">\n\n			\n\n			<ion-item id="username-item">\n\n				<ion-label stacked>Email</ion-label>\n\n				<ion-input name="email" type="text" ngModel required></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item id="password-item">\n\n				<ion-label stacked>Password</ion-label>\n\n				<ion-input name="password" type="password" ngModel required></ion-input>\n\n			</ion-item>\n\n\n\n			<button ion-button size="large" type="submit" [disabled]="form.invalid" full>Login</button>\n\n		</form>\n\n	\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_api__["a" /* RestApiProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identitas_satker_identitas_satker__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__unit_pengolah_unit_pengolah__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nama_layanan_nama_layanan__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__syarat_layanan_syarat_layanan__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__input_data_layanan_input_data_layanan__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__input_penyelesaian_layanan_input_penyelesaian_layanan__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(true, "myMenu");
    }
    HomePage.prototype.logout = function () {
        window.localStorage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.user = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__user_user__["a" /* UserPage */]).then(function () {
            _this.navCtrl.getActive().onDidDismiss(function (data) {
                console.log("dismiss");
            });
        });
    };
    HomePage.prototype.iden_satker = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__identitas_satker_identitas_satker__["a" /* IdentitasSatkerPage */]).then(function () {
            _this.navCtrl.getActive().onDidDismiss(function (data) {
                console.log("dismiss");
            });
        });
    };
    HomePage.prototype.unit_pengolah = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__unit_pengolah_unit_pengolah__["a" /* UnitPengolahPage */]).then(function () {
            _this.navCtrl.getActive().onDidDismiss(function (data) {
                console.log("dismiss");
            });
        });
    };
    HomePage.prototype.nama_layanan = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__nama_layanan_nama_layanan__["a" /* NamaLayananPage */]).then(function () {
            _this.navCtrl.getActive().onDidDismiss(function (data) {
                console.log("dismiss");
            });
        });
    };
    HomePage.prototype.syarat_layanan = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__syarat_layanan_syarat_layanan__["a" /* SyaratLayananPage */]).then(function () {
            _this.navCtrl.getActive().onDidDismiss(function (data) {
                console.log("dismiss");
            });
        });
    };
    HomePage.prototype.input_data_layanan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__input_data_layanan_input_data_layanan__["a" /* InputDataLayananPage */]);
    };
    HomePage.prototype.input_data_penyelesaian = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__input_penyelesaian_layanan_input_penyelesaian_layanan__["a" /* InputPenyelesaianLayananPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      MENU UTAMA\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <button ion-button color="secondary" full (click)="user()">User</button>\n  <button ion-button color="secondary" full (click)="iden_satker()">Identitas Satker</button>\n  <button ion-button color="secondary" full (click)="unit_pengolah()">Unit Pengolahan</button>\n  <button ion-button color="secondary" full (click)="nama_layanan()">Nama Layanan</button>\n  <button ion-button color="secondary" full (click)="syarat_layanan()">Syarat Layanan</button>\n  <button ion-button color="secondary" full (click)="input_data_layanan()">Input Data Layanan</button>\n  <button ion-button color="secondary" full (click)="input_data_penyelesaian()">Input Penyelesaian Layanan</button>\n  <button ion-button color="secondary" full>Olah Data Layanan</button>\n  <button ion-button color="secondary" full>Kosongkan Databse Layanan</button>\n  <button ion-button color="secondary" full (click)="logout()">Keluar</button> -->\n\n  <ion-list>\n    <ion-item>\n      <div class="box-home">\n        <ion-icon name="create" id="icon-box"></ion-icon>\n        <h2 text-center>Input Data Layanan</h2>\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <div class="box-home">\n        <ion-icon name="done-all" id="icon-box"></ion-icon>\n        <h2 text-center>Input Penyelesaian Layanan</h2>\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <div class="box-home">\n        <ion-icon name="person-add" id="icon-box"></ion-icon>\n        <h2 text-center>Add New User</h2>\n      </div>\n    </ion-item>\n    \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_create__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, navParams, viewCtrl, modalCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(true, "myMenu");
    }
    UserPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    UserPage.prototype.addUser = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__user_create__["a" /* UserCreatePage */]).present();
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\user\user.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      User\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only class="mr-0">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n      <ion-item-sliding>\n        <ion-item>\n          <ion-thumbnail item-left>\n            <img src="assets/images/user_img.png"/>\n          </ion-thumbnail>\n          Admin satu lalala\n          <p>Nip : 0000252552486588</p>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button>Action</button>\n        </ion-item-options>\n      </ion-item-sliding>\n      <ion-item-sliding>\n        <ion-item>\n          <ion-thumbnail item-left>\n            <img src="assets/images/user_img.png"/>\n          </ion-thumbnail>\n          Admin Dua lelele\n          <p>Nip : 855285452654654</p>\n        </ion-item>\n\n        <ion-item-options side="right">\n          <button ion-button>Action</button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n\n    <ion-fab right bottom>\n      <button ion-fab color="secondary" (click)="addUser()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\user\user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserCreatePage = /** @class */ (function () {
    function UserCreatePage(navCtrl, navParams, viewCtrl, modalCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.page = "create";
        this.buildForm();
    }
    UserCreatePage.prototype.buildForm = function () {
        this.userForm = this.formBuilder.group({
            nama_user: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            nip: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            unit_kerja: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            kata_sandi: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            status_user: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    UserCreatePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    UserCreatePage.prototype.storeData = function () {
        console.log(this.userForm.value);
    };
    UserCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\user\user_create.html"*/'<ion-header>\n\n	<ion-navbar color="secondary">\n\n		<ion-buttons left>\n\n			<button ion-button icon-only (click)="viewCtrl.dismiss()" class="my-style-for-modal">\n\n				<ion-icon name="arrow-back"></ion-icon>\n\n			</button>\n\n		</ion-buttons>\n\n		<ion-title *ngIf="page == \'create\'">Create Data User</ion-title>\n\n		<ion-title *ngIf="page == \'edit\'">Edit Data User</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<form [formGroup]="userForm">\n\n		<ion-list>\n\n			<ion-item>\n\n				<ion-label stacked>Nama User</ion-label>\n\n				<ion-input type="text" [(ngModel)]="nama_user" formControlName="nama_user"></ion-input>\n\n			</ion-item>\n\n			<ion-item>\n\n				<ion-label stacked>NIP</ion-label>\n\n				<ion-input type="text" [(ngModel)]="nip" formControlName="nip"></ion-input>\n\n			</ion-item>\n\n			<ion-item>\n\n				<ion-label stacked>Unit Kerja</ion-label>\n\n				<ion-input type="text" [(ngModel)]="unit_kerja" formControlName="unit_kerja"></ion-input>\n\n			</ion-item>\n\n			<ion-item>\n\n				<ion-label stacked>Kata Sandi</ion-label>\n\n				<ion-input type="text" [(ngModel)]="kata_sandi" formControlName="kata_sandi"></ion-input>\n\n			</ion-item>\n\n			<ion-item>\n\n				<ion-label stacked>Status User</ion-label>\n\n				<ion-select [(ngModel)]="status_user" formControlName="status_user">\n\n					<ion-option value="Admin">Admin</ion-option>\n\n					<ion-option value="BO">BO</ion-option>\n\n					<ion-option value="FO">FO</ion-option>\n\n				</ion-select>\n\n			</ion-item>\n\n		</ion-list>\n\n	</form>\n\n</ion-content>\n\n\n\n<ion-footer class="footer-save-btn">\n\n	<ion-toolbar color="primary">\n\n		<button ion-button size="large" type="submit" full (click)="storeData()">Save Data</button>\n\n	</ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\user\user_create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], UserCreatePage);
    return UserCreatePage;
}());

//# sourceMappingURL=user_create.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitPengolahPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnitPengolahPage = /** @class */ (function () {
    function UnitPengolahPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UnitPengolahPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UnitPengolahPage');
    };
    UnitPengolahPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-unit-pengolah',template:/*ion-inline-start:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\unit-pengolah\unit-pengolah.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Unit Pengolah Layanan</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding>\n      <ion-item>\n        Sub Bagian Perencanaan dan Keuangan\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button>Action</button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item>\n        Sub Bagian Ortala dan Kepegawaian \n      </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button>Action</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\unit-pengolah\unit-pengolah.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], UnitPengolahPage);
    return UnitPengolahPage;
}());

//# sourceMappingURL=unit-pengolah.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NamaLayananPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_layanan__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NamaLayananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NamaLayananPage = /** @class */ (function () {
    function NamaLayananPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    NamaLayananPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NamaLayananPage');
    };
    NamaLayananPage.prototype.list_detail = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__list_layanan__["a" /* ListLayananPage */]).present();
    };
    NamaLayananPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nama-layanan',template:/*ion-inline-start:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\nama-layanan\nama-layanan.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>nama-layanan</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item (click)="list_detail()">\n      Nama Layanan 1\n      <ion-icon name="arrow-round-forward" item-end></ion-icon>\n    </ion-item>\n    <ion-item (click)="list_detail()">\n      Nama Layanan 2\n      <ion-icon name="arrow-round-forward" item-end></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\nama-layanan\nama-layanan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], NamaLayananPage);
    return NamaLayananPage;
}());

//# sourceMappingURL=nama-layanan.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListLayananPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NamaLayananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListLayananPage = /** @class */ (function () {
    function ListLayananPage(navCtrl, navParams, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
    }
    ListLayananPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad list layanan');
    };
    ListLayananPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-layanan',template:/*ion-inline-start:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\nama-layanan\list_layanan.html"*/'<ion-header>\n\n	<ion-navbar color="secondary">\n\n			<ion-buttons left>\n\n				<button ion-button icon-only (click)="viewCtrl.dismiss()" class="my-style-for-modal">\n\n					<ion-icon name="arrow-back"></ion-icon>\n\n				</button>\n\n			</ion-buttons>\n\n		<ion-title>list-layanan-1</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-list>\n\n		<ion-item>\n\n			list 1 Layanan 1\n\n		</ion-item>\n\n		<ion-item>\n\n			list 2 Layanan 2\n\n		</ion-item>\n\n	</ion-list>\n\n\n\n</ion-content>\n\n      '/*ion-inline-end:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\nama-layanan\list_layanan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], ListLayananPage);
    return ListLayananPage;
}());

//# sourceMappingURL=list_layanan.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyaratLayananPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_syarat__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SyaratLayananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SyaratLayananPage = /** @class */ (function () {
    function SyaratLayananPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    SyaratLayananPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SyaratLayananPage');
    };
    SyaratLayananPage.prototype.detail = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__list_syarat__["a" /* ListSyaratPage */]).present();
    };
    SyaratLayananPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-syarat-layanan',template:/*ion-inline-start:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\syarat-layanan\syarat-layanan.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Syarat Layanan</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item (click)="detail()">\n      Permohonan Surat Ijin Pendirian dan Operasional Madrasah\n      <ion-icon name="arrow-round-forward" item-end></ion-icon>\n    </ion-item>\n    <ion-item (click)="detail()">\n      Permohonan Sertifikat Muallaf\n      <ion-icon name="arrow-round-forward" item-end></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\syarat-layanan\syarat-layanan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], SyaratLayananPage);
    return SyaratLayananPage;
}());

//# sourceMappingURL=syarat-layanan.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListSyaratPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SyaratLayananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListSyaratPage = /** @class */ (function () {
    function ListSyaratPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ListSyaratPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SyaratLayananPage');
    };
    ListSyaratPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-syarat-layanan',template:/*ion-inline-start:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\syarat-layanan\list_syarat.html"*/'<ion-header>\n\n	<ion-navbar color="secondary">\n\n		<ion-buttons left>\n\n			<button ion-button icon-only (click)="viewCtrl.dismiss()" class="my-style-for-modal">\n\n				<ion-icon name="arrow-back"></ion-icon>\n\n			</button>\n\n		</ion-buttons>\n\n		<ion-title>Syarat Layanan</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-list>\n\n		<ion-item (click)="list_detail()">\n\n			<h3>Syarat Layanan 1</h3>\n\n			<small><ion-icon name="attach" item-end></ion-icon> : Attachment 1, Attachment 2</small>\n\n		</ion-item>\n\n		<ion-item (click)="list_detail()">\n\n			<h3>Permohonan Sertifikat Muallaf</h3>\n\n			<small><ion-icon name="attach" item-end></ion-icon> : Attachment 1, Attachment 2</small>\n\n		</ion-item>\n\n	</ion-list>\n\n\n\n</ion-content>\n\n  '/*ion-inline-end:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\syarat-layanan\list_syarat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], ListSyaratPage);
    return ListSyaratPage;
}());

//# sourceMappingURL=list_syarat.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputDataLayananPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_data_layanan__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InputDataLayananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InputDataLayananPage = /** @class */ (function () {
    function InputDataLayananPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    InputDataLayananPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InputDataLayananPage');
    };
    InputDataLayananPage.prototype.input_data = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__form_data_layanan__["a" /* FormDataLayanan */]).present();
    };
    InputDataLayananPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-input-data-layanan',template:/*ion-inline-start:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\input-data-layanan\input-data-layanan.html"*/'<ion-header>\n    <ion-navbar color="secondary">\n      <ion-title>Input Data Layanan</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n      <ion-item-sliding>\n        <ion-item>\n          <div style="float: left">\n            <h4><b>Kw-19-19010200002</b></h4>\n            <small style="display:block">No . 123</small>\n            <small style="display:block">27-01-2019</small>\n          </div>\n          <div style="float: right">\n            <small style="display:block">Drs. H. Hurma</small>\n            <small style="display:block">26-01-2019</small>\n            <small style="display:block">Proses</small>\n          </div>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button>Action</button>\n        </ion-item-options>\n      </ion-item-sliding>\n      <ion-item-sliding>\n        <ion-item>\n          <div style="float: left">\n            <h4><b>Kw-19-19010200002</b></h4>\n            <small style="display:block">No . 123</small>\n            <small style="display:block">27-01-2019</small>\n          </div>\n          <div style="float: right">\n            <small style="display:block">Drs. H. Hurma</small>\n            <small style="display:block">26-01-2019</small>\n            <small style="display:block">Proses</small>\n          </div>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button>Action</button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n\n    <ion-fab right bottom>\n      <button ion-fab color="secondary" (click)="input_data()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n  \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\input-data-layanan\input-data-layanan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], InputDataLayananPage);
    return InputDataLayananPage;
}());

//# sourceMappingURL=input-data-layanan.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormDataLayanan; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InputDataLayananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FormDataLayanan = /** @class */ (function () {
    function FormDataLayanan(navCtrl, navParams, modalCtrl, viewCtrl, globalProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.globalProvider = globalProvider;
    }
    FormDataLayanan.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InputDataLayananPage');
    };
    FormDataLayanan.prototype.storeData = function (form) {
        this.globalProvider.toastDefault("Data Berhasil Disimpan.");
        this.viewCtrl.dismiss();
    };
    FormDataLayanan = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-input-data-layanan',template:/*ion-inline-start:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\input-data-layanan\form_data_layanan.html"*/'<ion-header>\n\n	<ion-navbar color="secondary">\n\n		<ion-buttons left>\n\n			<button ion-button icon-only (click)="viewCtrl.dismiss()" class="my-style-for-modal">\n\n				<ion-icon name="arrow-back"></ion-icon>\n\n			</button>\n\n		</ion-buttons>\n\n		<ion-title>\n\n			Form Input Data Layanan\n\n		</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<form #form="ngForm">\n\n		<ion-item>\n\n			<ion-label stacked>No. Registrasi</ion-label>\n\n			<ion-input name="no_registrasi" type="text" placeholder="No. Registrasi" ngModel></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label stacked>Nama Layanan</ion-label>\n\n			<ion-input name="nama_layanan" type="text" placeholder="Nama Layanan" ngModel required></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label stacked>Uraian Permohonan</ion-label>\n\n			<ion-input name="uraian_permohonan" type="text" placeholder="Uraian Permohonan" ngModel></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label stacked>Lama Proses Layanan</ion-label>\n\n			<ion-input name="lama_proses_layanan" type="text" placeholder="Lama Proses Layanan" ngModel></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label stacked>Tanggal Terima</ion-label>\n\n			<ion-datetime name="tgl_terima" displayFormat="MMMM DD YYYY" placeholder="Select Date"></ion-datetime>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label stacked>Tanggal Selesai</ion-label>\n\n			<ion-datetime name="tgl_selesai" displayFormat="MMMM DD YYYY" placeholder="Select Date"></ion-datetime>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label stacked>No. Surat Pemohon</ion-label>\n\n			<ion-input name="no_surat_permohonan" type="text" placeholder="No. Surat Permohonan" ngModel></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label stacked>Tanggal Surat Pemohon</ion-label>\n\n			<ion-datetime name="tgl_surat_pemohon" displayFormat="MMMM DD YYYY" placeholder="Select Date"></ion-datetime>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label stacked>Nama Pemohon</ion-label>\n\n			<ion-input name="nama_pemohon" type="text" placeholder="Nama Pemohon" ngModel></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label stacked>Alamat Pemohon</ion-label>\n\n			<ion-textarea name="alamat_pemohon" type="text" placeholder="Alamat Pemohon" ngModel rows="5"></ion-textarea>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label stacked>No Telp/HP Pemohon</ion-label>\n\n			<ion-input name="tlp_pemohon" type="text" placeholder="No Telp/HP Pemohon" ngModel></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label stacked>Kelengkapan Syarat</ion-label>\n\n			<ion-select name="kelengkapa_syarat">\n\n				<ion-option value="Lengkap">Lengkap</ion-option>\n\n				<ion-option value="Belum Lengkap">Belum Lengkap</ion-option>\n\n			</ion-select>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label stacked>Status Layanan</ion-label>\n\n			<ion-select name="status_layanan">\n\n				<ion-option value="Proses">Proses</ion-option>\n\n				<ion-option value="Selesai">Selesai</ion-option>\n\n			</ion-select>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label stacked>Nama Petugas (FO)</ion-label>\n\n			<ion-input name="nama_petugas" type="text" placeholder="Nama Petugas" ngModel></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label stacked>Catatan</ion-label>\n\n			<ion-textarea name="catatan" type="text" placeholder="Catatan" ngModel rows="10"></ion-textarea>\n\n		</ion-item>\n\n\n\n	</form>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n		<button ion-button size="large" type="submit" [disabled]="form.invalid" full (click)="storeData(form)">Save Data</button>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\input-data-layanan\form_data_layanan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global__["a" /* GlobalProvider */]])
    ], FormDataLayanan);
    return FormDataLayanan;
}());

//# sourceMappingURL=form_data_layanan.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPenyelesaianLayananPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extra_select2_options__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the InputPenyelesaianLayananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InputPenyelesaianLayananPage = /** @class */ (function () {
    function InputPenyelesaianLayananPage(navCtrl, navParams, modalCtrl, globalProvider, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.globalProvider = globalProvider;
        this.viewCtrl = viewCtrl;
        this.criteria = {
            no_registrasi: '',
        };
    }
    InputPenyelesaianLayananPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InputPenyelesaianLayananPage');
    };
    InputPenyelesaianLayananPage.prototype.daftar_data_layanan = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__extra_select2_options__["a" /* Select2Option */], { from_module: 'penyelesaian_layanan' });
        modal.onDidDismiss(function (data) {
            _this.criteria.no_registrasi = data;
        });
        modal.present();
    };
    InputPenyelesaianLayananPage.prototype.storeData = function (form) {
        this.globalProvider.toastDefault("Data Berhasil Disimpan.");
        this.viewCtrl.dismiss();
    };
    InputPenyelesaianLayananPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-input-penyelesaian-layanan',template:/*ion-inline-start:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\input-penyelesaian-layanan\input-penyelesaian-layanan.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title text-center>\n      Input Penyelesaian Layanan\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form #form="ngForm">\n    \n    <ion-item>\n      <ion-label stacked>Cari No. Registrasi</ion-label>\n      <ion-input type="text" readonly (click)="daftar_data_layanan()"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Konfirmasi Oleh BO(<small>Berkas sedang diproses)</small></ion-label>\n      <ion-select name="konfirm_bo">\n        <ion-option value="1">Ya</ion-option>\n        <ion-option value="0">Tidak</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>No. Registrasi</ion-label>\n      <ion-input type="text" [(ngModel)]="criteria.no_registrasi" [ngModelOptions]="{standalone:true}"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Nama Layanan</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>uraian Permohonan</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Lama Proses Layanan</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Tanggal Terima</ion-label>\n      <ion-datetime name="tgl_terima" displayFormat="MMMM DD YYYY" placeholder="Select Date"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Tanggal Selesai</ion-label>\n      <ion-datetime name="tgl_selesai" displayFormat="MMMM DD YYYY" placeholder="Select Date"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>No. Surat Permohonan</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Tanggal Surat Pemohon</ion-label>\n      <ion-datetime name="tgl_surat_pemohon" displayFormat="MMMM DD YYYY" placeholder="Select Date"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Nama Pemohon</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Alamat Pemohon</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>No. Telp/HP Pemohon</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Kelengkapan Syarat</ion-label>\n      <ion-select name="kelengkapa_syarat">\n        <ion-option value="Lengkap">Lengkap</ion-option>\n        <ion-option value="Belum Lengkap">Belum Lengkap</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Nama Petugas</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Catatan</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>No Surat/Dokumen</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Tanggal Surat</ion-label>\n      <ion-datetime name="tgl_surat_pemohon" displayFormat="MMMM DD YYYY" placeholder="Select Date"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Nama Pemroses</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Status Layanan</ion-label>\n      <ion-select name="status_layanan">\n        <ion-option value="Proses">Proses</ion-option>\n        <ion-option value="Selesai">Selesai</ion-option>\n      </ion-select>\n    </ion-item>\n\n  </form>\n</ion-content>\n\n<ion-footer>\n		<button ion-button size="large" type="submit" [disabled]="form.invalid" full (click)="storeData(form)">Save Data</button>\n</ion-footer>'/*ion-inline-end:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\input-penyelesaian-layanan\input-penyelesaian-layanan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], InputPenyelesaianLayananPage);
    return InputPenyelesaianLayananPage;
}());

//# sourceMappingURL=input-penyelesaian-layanan.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstansiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instansi_edit__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instansi_create__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_api__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the InstansiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InstansiPage = /** @class */ (function () {
    function InstansiPage(navCtrl, navParams, modalCtrl, viewCtrl, restApi, actionSheetCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.restApi = restApi;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.table_module = 'instansi';
        this.token = window.localStorage.getItem("token");
        this.criteria = {
            token: this.token,
        };
        this.listData();
    }
    InstansiPage.prototype.listData = function () {
        var _this = this;
        var content = {
            token: this.criteria.token,
            used: 'organisasi',
        };
        console.log(content);
        this.restApi.listData(content, this.table_module).then(function (result) {
            _this.list_data = result['instansi'];
        });
    };
    InstansiPage.prototype.addInstansi = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__instansi_create__["a" /* InstansiCreatePage */]);
        modal.onDidDismiss(function () {
            _this.listData();
        });
        modal.present();
    };
    InstansiPage.prototype.optionList = function (list) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: list['instansi_name'],
            buttons: [
                {
                    icon: 'create',
                    text: "Edit",
                    handler: function () {
                        _this.edit(list);
                    }
                },
                {
                    icon: 'trash',
                    text: "Delete",
                    handler: function () {
                        _this.deleteBox(list['instansi_uuid']);
                    }
                },
            ],
        });
        actionSheet.present();
    };
    InstansiPage.prototype.edit = function (data) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__instansi_edit__["a" /* InstansiEditPage */], { data: data });
        modal.onDidDismiss(function () {
            _this.listData();
        });
        modal.present();
    };
    InstansiPage.prototype.deleteBox = function (data_uuid) {
        var _this = this;
        this.alertCtrl.create({
            title: "Delete",
            subTitle: "Are you sure delete this data ?",
            buttons: [{
                    text: "YES",
                    handler: function () {
                        _this.delete(data_uuid);
                    }
                },
                {
                    text: "NO"
                }]
        }).present();
    };
    InstansiPage.prototype.delete = function (data_uuid) {
        var _this = this;
        var content = {
            token: this.criteria.token,
            module: this.table_module,
            uuid: data_uuid,
        };
        this.restApi.deleteData(content).then(function (result) {
            if (result['message'] == "DELETED") {
                _this.listData();
            }
        });
    };
    InstansiPage.prototype.doRefresh = function (refresher) {
        this.criteria.page = 1;
        this.listData();
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    InstansiPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    InstansiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-instansi',template:/*ion-inline-start:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\instansi\instansi.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Instansi</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <ion-item *ngFor="let list of list_data" (click)="optionList(list)">\n      <ion-thumbnail item-left>\n        <img src="assets/images/instansi.png"/>\n      </ion-thumbnail>\n      {{ list.instansi_name }}\n      <p>Induk : {{ list.organisasi_name }}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab color="secondary" (click)="addInstansi()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\instansi\instansi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_api__["a" /* RestApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], InstansiPage);
    return InstansiPage;
}());

//# sourceMappingURL=instansi.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstansiEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extra_select2_options__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_api__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the InstansiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InstansiEditPage = /** @class */ (function () {
    function InstansiEditPage(navCtrl, navParams, modalCtrl, builder, viewCtrl, restApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.builder = builder;
        this.viewCtrl = viewCtrl;
        this.restApi = restApi;
        this.table_module = "instansi";
        this.token = window.localStorage.getItem("token");
        this.page = 'create';
        this.organisasi_id_label = "";
        this.validateDefined();
        this.content = this.navParams.get("data");
        this.editData();
    }
    InstansiEditPage.prototype.validateDefined = function () {
        this.createForm = this.builder.group({
            'organisasi_id': [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])
            ],
            'instansi_name': [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])
            ],
            'instansi_address': [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])
            ],
            'instansi_telp': [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])
            ],
            'instansi_faks': [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([])
            ],
            'instansi_web': [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([])
            ],
            'instansi_email': [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([])
            ],
            'instansi_logo': [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([])
            ]
        });
    };
    // getData()
    // {
    // 	let content = {
    //     token   : this.token,
    // 		used    : 'organisasi',
    // 		keyword_instansi_id	: this.data_id,
    //   }
    //   console.log(content);
    //   this.restApi.listData(content, this.table_module).then(result => {
    //     // this.list_data = result['instansi'];
    //   });
    // }
    InstansiEditPage.prototype.editData = function () {
        this.data = {
            module: this.table_module,
            uuid: this.content.instansi_uuid,
            organisasi_id: this.content.organisasi_id,
            instansi_name: this.content.instansi_name,
            instansi_address: this.content.instansi_address,
            instansi_telp: this.content.instansi_telp,
            instansi_faks: this.content.instansi_faks,
            instansi_web: this.content.instansi_web,
            instansi_email: this.content.instansi_email,
            instansi_logo: this.content.instansi_logo,
        };
        this.organisasi_id_label = this.content.organisasi_name;
    };
    InstansiEditPage.prototype.select2Modal = function (parent) {
        var _this = this;
        if (parent === void 0) { parent = ""; }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__extra_select2_options__["a" /* Select2Option */], {
            from_module: parent,
        });
        modal.onDidDismiss(function (data) {
            if (parent == 'instansi_org') {
                _this.data.organisasi_id = data.value;
                _this.organisasi_id_label = data.label;
            }
        });
        modal.present();
    };
    /* STORE DATA */
    InstansiEditPage.prototype.storeData = function () {
        var _this = this;
        this.restApi.updateData(this.data, this.token).then(function (result) {
            if (result['message'] == "UPDATED") {
                _this.dismiss();
            }
        });
    };
    /* END STORE DATA */
    InstansiEditPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    InstansiEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-instansi',template:/*ion-inline-start:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\instansi\instansi_create.html"*/'<ion-header>\n\n	<ion-navbar color="secondary">\n\n		<ion-buttons left>\n\n			<button ion-button icon-only (click)="dismiss()" class="my-style-for-modal">\n\n				<ion-icon name="arrow-back"></ion-icon>\n\n			</button>\n\n		</ion-buttons>\n\n		<ion-title *ngIf="page == \'create\'">Create Data Instansi</ion-title>\n\n		<ion-title *ngIf="page == \'edit\'">Edit Data Instansi</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n	<form [formGroup]="createForm">\n\n		<ion-list>\n\n			<ion-item>\n\n				<ion-label stacked>Induk Organisasi</ion-label>\n\n				<ion-input type="hidden" [(ngModel)]="data.organisasi_id" formControlName="organisasi_id"></ion-input>\n\n				<ion-input type="text" [(ngModel)]="organisasi_id_label" [ngModelOptions]="{standalone:true}" readonly (click)="select2Modal(\'instansi_org\')"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n				<ion-label stacked>Nama Instansi</ion-label>\n\n				<ion-input type="text" [(ngModel)]="data.instansi_name" formControlName="instansi_name"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n				<ion-label stacked>Alamat Instansi</ion-label>\n\n				<ion-input type="text" [(ngModel)]="data.instansi_address" formControlName="instansi_address"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n				<ion-label stacked>Telepon</ion-label>\n\n				<ion-input type="text" [(ngModel)]="data.instansi_telp" formControlName="instansi_telp"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n				<ion-label stacked>Faksimili</ion-label>\n\n				<ion-input type="text" [(ngModel)]="data.instansi_faks" formControlName="instansi_faks"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n				<ion-label stacked>Website</ion-label>\n\n				<ion-input type="text" [(ngModel)]="data.instansi_web" formControlName="instansi_web"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n				<ion-label stacked>Email</ion-label>\n\n				<ion-input type="text" [(ngModel)]="data.instansi_email" formControlName="instansi_email"></ion-input>\n\n			</ion-item>\n\n		</ion-list>\n\n	</form>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n	<ion-toolbar color="{{ (!createForm.valid) ? \'danger\' : \'secondary\' }}">\n\n		<button ion-button [disabled]="!createForm.valid" clear color="light" full (click)="storeData()">Save</button>\n\n	</ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\instansi\instansi_create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_api__["a" /* RestApiProvider */]])
    ], InstansiEditPage);
    return InstansiEditPage;
}());

//# sourceMappingURL=instansi_edit.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstansiCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extra_select2_options__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_api__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the InstansiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InstansiCreatePage = /** @class */ (function () {
    function InstansiCreatePage(navCtrl, navParams, modalCtrl, builder, viewCtrl, restApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.builder = builder;
        this.viewCtrl = viewCtrl;
        this.restApi = restApi;
        this.table_module = "instansi";
        this.token = window.localStorage.getItem("token");
        this.page = 'create';
        this.criteria = {
            // token : this.token,
            module: this.table_module,
        };
        this.data = this.criteria;
        this.organisasi_id_label = "";
        this.validateDefined();
    }
    InstansiCreatePage.prototype.validateDefined = function () {
        this.createForm = this.builder.group({
            'organisasi_id': [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])
            ],
            'instansi_name': [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])
            ],
            'instansi_address': [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])
            ],
            'instansi_telp': [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])
            ],
            'instansi_faks': [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([])
            ],
            'instansi_web': [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([])
            ],
            'instansi_email': [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([])
            ],
            'instansi_logo': [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([])
            ]
        });
    };
    InstansiCreatePage.prototype.select2Modal = function (parent) {
        var _this = this;
        if (parent === void 0) { parent = ""; }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__extra_select2_options__["a" /* Select2Option */], {
            from_module: parent,
        });
        modal.onDidDismiss(function (data) {
            if (parent == 'instansi_org') {
                _this.data.organisasi_id = data.value;
                _this.organisasi_id_label = data.label;
            }
        });
        modal.present();
    };
    /* STORE DATA */
    InstansiCreatePage.prototype.storeData = function () {
        var _this = this;
        console.log(this.data);
        this.restApi.saveData(this.data, this.token).then(function (result) {
            if (result['message'] == "CREATED") {
                _this.dismiss();
            }
        });
    };
    /* END STORE DATA */
    InstansiCreatePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    InstansiCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-instansi',template:/*ion-inline-start:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\instansi\instansi_create.html"*/'<ion-header>\n\n	<ion-navbar color="secondary">\n\n		<ion-buttons left>\n\n			<button ion-button icon-only (click)="dismiss()" class="my-style-for-modal">\n\n				<ion-icon name="arrow-back"></ion-icon>\n\n			</button>\n\n		</ion-buttons>\n\n		<ion-title *ngIf="page == \'create\'">Create Data Instansi</ion-title>\n\n		<ion-title *ngIf="page == \'edit\'">Edit Data Instansi</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n	<form [formGroup]="createForm">\n\n		<ion-list>\n\n			<ion-item>\n\n				<ion-label stacked>Induk Organisasi</ion-label>\n\n				<ion-input type="hidden" [(ngModel)]="data.organisasi_id" formControlName="organisasi_id"></ion-input>\n\n				<ion-input type="text" [(ngModel)]="organisasi_id_label" [ngModelOptions]="{standalone:true}" readonly (click)="select2Modal(\'instansi_org\')"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n				<ion-label stacked>Nama Instansi</ion-label>\n\n				<ion-input type="text" [(ngModel)]="data.instansi_name" formControlName="instansi_name"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n				<ion-label stacked>Alamat Instansi</ion-label>\n\n				<ion-input type="text" [(ngModel)]="data.instansi_address" formControlName="instansi_address"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n				<ion-label stacked>Telepon</ion-label>\n\n				<ion-input type="text" [(ngModel)]="data.instansi_telp" formControlName="instansi_telp"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n				<ion-label stacked>Faksimili</ion-label>\n\n				<ion-input type="text" [(ngModel)]="data.instansi_faks" formControlName="instansi_faks"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n				<ion-label stacked>Website</ion-label>\n\n				<ion-input type="text" [(ngModel)]="data.instansi_web" formControlName="instansi_web"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n				<ion-label stacked>Email</ion-label>\n\n				<ion-input type="text" [(ngModel)]="data.instansi_email" formControlName="instansi_email"></ion-input>\n\n			</ion-item>\n\n		</ion-list>\n\n	</form>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n	<ion-toolbar color="{{ (!createForm.valid) ? \'danger\' : \'secondary\' }}">\n\n		<button ion-button [disabled]="!createForm.valid" clear color="light" full (click)="storeData()">Save</button>\n\n	</ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\instansi\instansi_create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_api__["a" /* RestApiProvider */]])
    ], InstansiCreatePage);
    return InstansiCreatePage;
}());

//# sourceMappingURL=instansi_create.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganisasiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_api__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__organisasi_create__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__organisasi_edit__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the OrganisasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrganisasiPage = /** @class */ (function () {
    function OrganisasiPage(navCtrl, navParams, modalCtrl, viewCtrl, restApi, actionSheetCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.restApi = restApi;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.table_module = 'organisasi';
        this.token = window.localStorage.getItem("token");
        this.criteria = {
            token: this.token,
        };
        this.listData();
    }
    OrganisasiPage.prototype.listData = function () {
        var _this = this;
        var content = {
            token: this.criteria.token,
        };
        this.restApi.listData(content, this.table_module).then(function (result) {
            if (typeof result['message'] !== undefined && result['message'] == "SUCCESS") {
                _this.list_data = result['organisasi'];
            }
        });
    };
    OrganisasiPage.prototype.addOrg = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__organisasi_create__["a" /* OrganisasiCreatePage */]);
        modal.onDidDismiss(function () {
            _this.listData();
        });
        modal.present();
    };
    OrganisasiPage.prototype.optionList = function (list) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: list['organisasi_name'],
            buttons: [
                {
                    icon: 'create',
                    text: "Edit",
                    handler: function () {
                        _this.edit(list);
                    }
                },
                {
                    icon: 'trash',
                    text: "Delete",
                    handler: function () {
                        _this.deleteBox(list['organisasi_uuid']);
                    }
                },
            ],
        });
        actionSheet.present();
    };
    OrganisasiPage.prototype.edit = function (data) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__organisasi_edit__["a" /* OrganisasiEditPage */], { data: data });
        modal.onDidDismiss(function () {
            _this.listData();
        });
        modal.present();
    };
    OrganisasiPage.prototype.deleteBox = function (data_uuid) {
        var _this = this;
        this.alertCtrl.create({
            title: "Delete",
            subTitle: "Are you sure delete this data ?",
            buttons: [{
                    text: "YES",
                    handler: function () {
                        _this.delete(data_uuid);
                    }
                },
                {
                    text: "NO"
                }]
        }).present();
    };
    OrganisasiPage.prototype.delete = function (data_uuid) {
        var _this = this;
        var content = {
            token: this.criteria.token,
            module: this.table_module,
            uuid: data_uuid,
        };
        this.restApi.deleteData(content).then(function (result) {
            if (result['message'] == "DELETED") {
                _this.listData();
            }
        });
    };
    OrganisasiPage.prototype.doRefresh = function (refresher) {
        this.criteria.page = 1;
        this.listData();
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    OrganisasiPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    OrganisasiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-organisasi',template:/*ion-inline-start:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\organisasi\organisasi.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Organisasi</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <ion-item *ngFor="let list of list_data">\n      <ion-thumbnail item-left>\n        <img src="assets/images/instansi.png"/>\n      </ion-thumbnail>\n      {{ list.organisasi_name }}\n      <ion-icon name="more" item-end (click)="optionList(list)" style="padding-right: 10px"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab color="secondary" (click)="addOrg()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\organisasi\organisasi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_api__["a" /* RestApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], OrganisasiPage);
    return OrganisasiPage;
}());

//# sourceMappingURL=organisasi.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganisasiCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_api__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the InstansiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrganisasiCreatePage = /** @class */ (function () {
    function OrganisasiCreatePage(navCtrl, navParams, modalCtrl, builder, viewCtrl, restApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.builder = builder;
        this.viewCtrl = viewCtrl;
        this.restApi = restApi;
        this.table_module = "organisasi";
        this.token = window.localStorage.getItem("token");
        this.page = 'create';
        this.criteria = {
            // token : this.token,
            module: this.table_module,
        };
        this.data = this.criteria;
        this.organisasi_id_label = "";
        this.validateDefined();
    }
    OrganisasiCreatePage.prototype.validateDefined = function () {
        this.createForm = this.builder.group({
            'organisasi_name': [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])
            ]
        });
    };
    /* STORE DATA */
    OrganisasiCreatePage.prototype.storeData = function () {
        var _this = this;
        console.log(this.data);
        this.restApi.saveData(this.data, this.token).then(function (result) {
            if (result['message'] == "CREATED") {
                _this.dismiss();
            }
        });
    };
    /* END STORE DATA */
    OrganisasiCreatePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    OrganisasiCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-organisasi',template:/*ion-inline-start:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\organisasi\organisasi_create.html"*/'<ion-header>\n\n	<ion-navbar color="secondary">\n\n		<ion-buttons left>\n\n			<button ion-button icon-only (click)="dismiss()" class="my-style-for-modal">\n\n				<ion-icon name="arrow-back"></ion-icon>\n\n			</button>\n\n		</ion-buttons>\n\n		<ion-title *ngIf="page == \'create\'">Create Data Organisasi</ion-title>\n\n		<ion-title *ngIf="page == \'edit\'">Edit Data Organisasi</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n	<form [formGroup]="createForm">\n\n		<ion-list>\n\n\n\n			<ion-item>\n\n				<ion-label stacked>Nama Organisasi</ion-label>\n\n				<ion-input type="text" [(ngModel)]="data.organisasi_name" formControlName="organisasi_name"></ion-input>\n\n			</ion-item>\n\n\n\n		</ion-list>\n\n	</form>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n	<ion-toolbar color="{{ (!createForm.valid) ? \'danger\' : \'secondary\' }}">\n\n		<button ion-button [disabled]="!createForm.valid" clear color="light" full (click)="storeData()">Save</button>\n\n	</ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\organisasi\organisasi_create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_api__["a" /* RestApiProvider */]])
    ], OrganisasiCreatePage);
    return OrganisasiCreatePage;
}());

//# sourceMappingURL=organisasi_create.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganisasiEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_api__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the InstansiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrganisasiEditPage = /** @class */ (function () {
    function OrganisasiEditPage(navCtrl, navParams, modalCtrl, builder, viewCtrl, restApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.builder = builder;
        this.viewCtrl = viewCtrl;
        this.restApi = restApi;
        this.table_module = "organisasi";
        this.token = window.localStorage.getItem("token");
        this.page = 'create';
        this.organisasi_id_label = "";
        this.validateDefined();
        this.content = this.navParams.get("data");
        this.editData();
    }
    OrganisasiEditPage.prototype.validateDefined = function () {
        this.createForm = this.builder.group({
            'organisasi_name': [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])
            ]
        });
    };
    OrganisasiEditPage.prototype.editData = function () {
        this.data = {
            module: this.table_module,
            uuid: this.content.organisasi_uuid,
            organisasi_name: this.content.organisasi_name,
        };
    };
    /* STORE DATA */
    OrganisasiEditPage.prototype.storeData = function () {
        var _this = this;
        this.restApi.updateData(this.data, this.token).then(function (result) {
            if (result['message'] == "UPDATED") {
                _this.dismiss();
            }
        });
    };
    /* END STORE DATA */
    OrganisasiEditPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    OrganisasiEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-organisasi',template:/*ion-inline-start:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\organisasi\organisasi_create.html"*/'<ion-header>\n\n	<ion-navbar color="secondary">\n\n		<ion-buttons left>\n\n			<button ion-button icon-only (click)="dismiss()" class="my-style-for-modal">\n\n				<ion-icon name="arrow-back"></ion-icon>\n\n			</button>\n\n		</ion-buttons>\n\n		<ion-title *ngIf="page == \'create\'">Create Data Organisasi</ion-title>\n\n		<ion-title *ngIf="page == \'edit\'">Edit Data Organisasi</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n	<form [formGroup]="createForm">\n\n		<ion-list>\n\n\n\n			<ion-item>\n\n				<ion-label stacked>Nama Organisasi</ion-label>\n\n				<ion-input type="text" [(ngModel)]="data.organisasi_name" formControlName="organisasi_name"></ion-input>\n\n			</ion-item>\n\n\n\n		</ion-list>\n\n	</form>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n	<ion-toolbar color="{{ (!createForm.valid) ? \'danger\' : \'secondary\' }}">\n\n		<button ion-button [disabled]="!createForm.valid" clear color="light" full (click)="storeData()">Save</button>\n\n	</ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\organisasi\organisasi_create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_api__["a" /* RestApiProvider */]])
    ], OrganisasiEditPage);
    return OrganisasiEditPage;
}());

//# sourceMappingURL=organisasi_edit.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Headers, RequestOptions } from '@angular/http';



/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestApiProvider = /** @class */ (function () {
    function RestApiProvider(http, globalProvider) {
        this.http = http;
        this.globalProvider = globalProvider;
        // Defined url
        this.apiUrl = this.globalProvider.config("apiUrlOnline");
        var apiUrlMode = this.globalProvider.config("apiMode");
        if (apiUrlMode == 0) {
            this.apiUrl = this.globalProvider.config("apiUrlOffline");
        }
    }
    RestApiProvider.prototype.auth = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'login', JSON.stringify(data))
                .timeout(25000)
                .subscribe(function (result) {
                resolve(result);
            }, function (err) {
                if (typeof err['name'] !== undefined && err['name'] == "HttpErrorResponse") {
                    var resp1 = { status: 500, msg: "HttpErrorResponse", data: Array() };
                    resolve(resp1);
                }
                else if (typeof err['name'] !== undefined && err['name'] == "TimeoutError") {
                    var resp2 = { status: 500, msg: "TimeoutError", data: Array() };
                    resolve(resp2);
                }
                else {
                    // this.globalProvider.toastWarning(this.globalProvider.config("msgErrorGlobal"));
                    resolve(err);
                }
            });
        });
    };
    RestApiProvider.prototype.listData = function (criteria, module) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var used = (criteria.used !== undefined) ? criteria.used : "";
            _this.http.get(_this.apiUrl + 'listing-data?token=' + criteria.token + '&module=' + module + '&used=' + used)
                .timeout(25000)
                .subscribe(function (result) {
                resolve(result);
            }, function (err) {
                if (typeof err['name'] !== undefined && err['name'] == "HttpErrorResponse") {
                    var resp1 = { status: 500, msg: "HttpErrorResponse", data: Array() };
                    resolve(resp1);
                }
                else if (typeof err['name'] !== undefined && err['name'] == "TimeoutError") {
                    var resp2 = { status: 500, msg: "TimeoutError", data: Array() };
                    resolve(resp2);
                }
                else {
                    // this.globalProvider.toastWarning(this.globalProvider.config("msgErrorGlobal"));
                    resolve(err);
                }
            });
        });
    };
    RestApiProvider.prototype.saveData = function (criteria, token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'create-data?token=' + token, JSON.stringify(criteria))
                .timeout(25000)
                .subscribe(function (result) {
                resolve(result);
            }, function (err) {
                if (typeof err['name'] !== undefined && err['name'] == "HttpErrorResponse") {
                    var resp1 = { status: 500, msg: "HttpErrorResponse", data: Array() };
                    resolve(resp1);
                }
                else if (typeof err['name'] !== undefined && err['name'] == "TimeoutError") {
                    var resp2 = { status: 500, msg: "TimeoutError", data: Array() };
                    resolve(resp2);
                }
                else {
                    // this.globalProvider.toastWarning(this.globalProvider.config("msgErrorGlobal"));
                    resolve(err);
                }
            });
        });
    };
    RestApiProvider.prototype.deleteData = function (criteria) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'delete-data?token=' + criteria.token, JSON.stringify(criteria))
                .timeout(25000)
                .subscribe(function (result) {
                resolve(result);
            }, function (err) {
                if (typeof err['name'] !== undefined && err['name'] == "HttpErrorResponse") {
                    var resp1 = { status: 500, msg: "HttpErrorResponse", data: Array() };
                    resolve(resp1);
                }
                else if (typeof err['name'] !== undefined && err['name'] == "TimeoutError") {
                    var resp2 = { status: 500, msg: "TimeoutError", data: Array() };
                    resolve(resp2);
                }
                else {
                    // this.globalProvider.toastWarning(this.globalProvider.config("msgErrorGlobal"));
                    resolve(err);
                }
            });
        });
    };
    RestApiProvider.prototype.updateData = function (criteria, token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'updated-data?token=' + token, JSON.stringify(criteria))
                .timeout(25000)
                .subscribe(function (result) {
                resolve(result);
            }, function (err) {
                if (typeof err['name'] !== undefined && err['name'] == "HttpErrorResponse") {
                    var resp1 = { status: 500, msg: "HttpErrorResponse", data: Array() };
                    resolve(resp1);
                }
                else if (typeof err['name'] !== undefined && err['name'] == "TimeoutError") {
                    var resp2 = { status: 500, msg: "TimeoutError", data: Array() };
                    resolve(resp2);
                }
                else {
                    // this.globalProvider.toastWarning(this.globalProvider.config("msgErrorGlobal"));
                    resolve(err);
                }
            });
        });
    };
    RestApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__global__["a" /* GlobalProvider */]])
    ], RestApiProvider);
    return RestApiProvider;
}());

//# sourceMappingURL=rest-api.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_rest_api__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_global__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_user_user__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_instansi_instansi__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_unit_pengolah_unit_pengolah__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_nama_layanan_nama_layanan__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_nama_layanan_list_layanan__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_syarat_layanan_syarat_layanan__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_syarat_layanan_list_syarat__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_input_data_layanan_input_data_layanan__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_input_data_layanan_form_data_layanan__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_input_penyelesaian_layanan_input_penyelesaian_layanan__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_extra_select2_options__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_olah_data_layanan_olah_data_layanan__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_user_user_create__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_instansi_instansi_create__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_organisasi_organisasi__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_instansi_instansi_edit__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_organisasi_organisasi_create__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_organisasi_organisasi_edit__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_instansi_instansi__["a" /* InstansiPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_unit_pengolah_unit_pengolah__["a" /* UnitPengolahPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_nama_layanan_nama_layanan__["a" /* NamaLayananPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_nama_layanan_list_layanan__["a" /* ListLayananPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_syarat_layanan_syarat_layanan__["a" /* SyaratLayananPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_syarat_layanan_list_syarat__["a" /* ListSyaratPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_input_data_layanan_input_data_layanan__["a" /* InputDataLayananPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_input_data_layanan_form_data_layanan__["a" /* FormDataLayanan */],
                __WEBPACK_IMPORTED_MODULE_20__pages_input_penyelesaian_layanan_input_penyelesaian_layanan__["a" /* InputPenyelesaianLayananPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_extra_select2_options__["a" /* Select2Option */],
                __WEBPACK_IMPORTED_MODULE_22__pages_olah_data_layanan_olah_data_layanan__["a" /* OlahDataLayananPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_user_user_create__["a" /* UserCreatePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_instansi_instansi_create__["a" /* InstansiCreatePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_instansi_instansi_edit__["a" /* InstansiEditPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_organisasi_organisasi__["a" /* OrganisasiPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_organisasi_organisasi_create__["a" /* OrganisasiCreatePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_organisasi_organisasi_edit__["a" /* OrganisasiEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login' },
                        { component: __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */], name: 'HomePage', segment: 'home' },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_user_user__["a" /* UserPage */], name: 'UserPage', segment: 'user' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_instansi_instansi__["a" /* InstansiPage */], name: 'InstansiPage', segment: 'instansi' },
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_unit_pengolah_unit_pengolah__["a" /* UnitPengolahPage */], name: 'UnitPengolahPage', segment: 'unit-pengolah' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_nama_layanan_nama_layanan__["a" /* NamaLayananPage */], name: 'NamaLayananPage', segment: 'nama-layanan' },
                        { component: __WEBPACK_IMPORTED_MODULE_16__pages_syarat_layanan_syarat_layanan__["a" /* SyaratLayananPage */], name: 'SyaratLayananPage', segment: 'syarat-layanan' },
                        { component: __WEBPACK_IMPORTED_MODULE_18__pages_input_data_layanan_input_data_layanan__["a" /* InputDataLayananPage */], name: 'InputDataLayananPage', segment: 'input-data-layanan' },
                        { component: __WEBPACK_IMPORTED_MODULE_20__pages_input_penyelesaian_layanan_input_penyelesaian_layanan__["a" /* InputPenyelesaianLayananPage */], name: 'InputPenyelesaianLayananPage', segment: 'input-penyelesaian-layanan' },
                        { component: __WEBPACK_IMPORTED_MODULE_25__pages_organisasi_organisasi__["a" /* OrganisasiPage */], name: 'OrganisasiPage', segment: 'organisasi' },
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_instansi_instansi__["a" /* InstansiPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_unit_pengolah_unit_pengolah__["a" /* UnitPengolahPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_nama_layanan_nama_layanan__["a" /* NamaLayananPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_nama_layanan_list_layanan__["a" /* ListLayananPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_syarat_layanan_syarat_layanan__["a" /* SyaratLayananPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_syarat_layanan_list_syarat__["a" /* ListSyaratPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_input_data_layanan_input_data_layanan__["a" /* InputDataLayananPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_input_data_layanan_form_data_layanan__["a" /* FormDataLayanan */],
                __WEBPACK_IMPORTED_MODULE_20__pages_input_penyelesaian_layanan_input_penyelesaian_layanan__["a" /* InputPenyelesaianLayananPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_extra_select2_options__["a" /* Select2Option */],
                __WEBPACK_IMPORTED_MODULE_22__pages_olah_data_layanan_olah_data_layanan__["a" /* OlahDataLayananPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_user_user_create__["a" /* UserCreatePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_instansi_instansi_create__["a" /* InstansiCreatePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_instansi_instansi_edit__["a" /* InstansiEditPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_organisasi_organisasi__["a" /* OrganisasiPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_organisasi_organisasi_create__["a" /* OrganisasiCreatePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_organisasi_organisasi_edit__["a" /* OrganisasiEditPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_rest_api__["a" /* RestApiProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_global__["a" /* GlobalProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_user_user__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_instansi_instansi__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_organisasi_organisasi__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { IdentitasSatkerPage } from '../pages/identitas-satker/identitas-satker';


Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.overlaysWebView(true);
            statusBar.backgroundColorByHexString('#32db64');
            splashScreen.hide();
        });
        // var access_login = window.localStorage.getItem("login_status");
        // if (typeof access_login == undefined || access_login == "" || access_login == null) 
        // {
        //   this.rootPage = LoginPage;
        // }
        // else
        // {
        //   this.rootPage = HomePage;
        // }
    }
    MyApp.prototype.openPage = function (page) {
        if (page == '' || page == 'beranda') {
            this.active_menu = 'beranda';
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
        }
        else if (page == 'user') {
            this.active_menu = 'user';
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_user_user__["a" /* UserPage */]);
        }
        else if (page == 'instansi') {
            this.active_menu = 'instansi';
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_instansi_instansi__["a" /* InstansiPage */]);
        }
        else if (page == 'organisasi') {
            this.active_menu = 'organisasi';
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_organisasi_organisasi__["a" /* OrganisasiPage */]);
        }
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Are you sure want to Logout?',
            buttons: [
                {
                    text: "No",
                    cssClass: "btnAllert-secondary-two",
                    role: 'cancel'
                },
                {
                    text: "Yes",
                    cssClass: "btnAllert-warning-two",
                    handler: function (user_email) {
                        window.localStorage.clear();
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
                    }
                },
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Developer02\Documents\ptsp-kanwil\src\app\app.html"*/'<ion-menu id="myMenu" [content]="myNav">\n	<ion-header class="menu-header-img">\n		<h2 ion-text wrap-text>PELAYANAN TERPADU SATU PINTU	(PTSP)</h2>\n		<span><ion-icon item-start name="contact"></ion-icon> Admin</span>\n		<small>Apps Version : v1.0.0</small>\n	</ion-header>\n      \n	<ion-content>\n		<ion-list>\n			<ion-item menuClose [class.menu-active]="active_menu == \'beranda\'" class="menu-list" (click)="openPage(\'beranda\')"><ion-icon item-start name="home"></ion-icon>Beranda</ion-item>\n			<ion-list-header>Data</ion-list-header>\n			<ion-item menuClose [class.menu-active]="active_menu == \'user\'" class="menu-list" (click)="openPage(\'user\')"><ion-icon item-start name="contacts"></ion-icon>User</ion-item>\n			<ion-item menuClose [class.menu-active]="active_menu == \'instansi\'" class="menu-list" (click)="openPage(\'instansi\')"><ion-icon item-start name="reorder"></ion-icon>Instansi</ion-item>\n			<ion-item menuClose [class.menu-active]="active_menu == \'organisasi\'" class="menu-list" (click)="openPage(\'organisasi\')"><ion-icon item-start name="filing"></ion-icon>Unit Pengolahan</ion-item>\n		</ion-list>\n		<ion-list>\n			<ion-list-header>Layanan</ion-list-header>\n			<ion-item menuClose class="menu-list"><ion-icon item-start name="cube"></ion-icon>Nama Layanan</ion-item>\n			<ion-item menuClose class="menu-list"><ion-icon item-start name="list-box"></ion-icon>Syarat Layanan</ion-item>\n			<ion-item menuClose class="menu-list"><ion-icon item-start name="list"></ion-icon>Data Layanan</ion-item>\n			<ion-item menuClose class="menu-list"><ion-icon item-start name="open"></ion-icon>Penyelesaian Layanan</ion-item>\n			<ion-item menuClose class="menu-list"><ion-icon item-start name="logo-buffer"></ion-icon>Olah Data Layanan</ion-item>\n		</ion-list>\n		<ion-list>\n			<ion-list-header>Lain-Lain</ion-list-header>\n			<ion-item menuClose class="menu-list"><ion-icon item-start name="settings"></ion-icon>Pengaturan</ion-item>\n			<ion-item class="menu-list" (click)=logout()><ion-icon item-start name="power"></ion-icon>Logout</ion-item>\n		</ion-list>\n	</ion-content>\n      \n</ion-menu>\n      \n<ion-nav [root]="rootPage" #myNav swipBackEnabled="false" main name="app" ></ion-nav>'/*ion-inline-end:"C:\Users\Developer02\Documents\ptsp-kanwil\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentitasSatkerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the IdentitasSatkerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IdentitasSatkerPage = /** @class */ (function () {
    function IdentitasSatkerPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(true, "myMenu");
    }
    IdentitasSatkerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-identitas-satker',template:/*ion-inline-start:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\identitas-satker\identitas-satker.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>SATKER</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/images/logo.png" height="60px" width="60px"> \n      </ion-col>\n      <ion-col col-9>\n        <h1 style="margin:1.5rem auto;padding:0px; text-align: center">IDENTITAS INSTANSI</h1>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <h3 text-center>A. Nama Instansi dan Alamat</h3>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Induk Organisasi</ion-label>\n      <ion-input type="text" readonly value="Kementerian Agama Republik Indonesia"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label floating>Unit Kerja</ion-label>\n      <ion-input type="text" readonly value="Kantor Wilayah Kementerian Agama Provinsi Nusa Tenggara Barat"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label floating>Alamat</ion-label>\n      <ion-input type="text" readonly value="Jalan Udayana No. 6 Mataram 83122"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Kabupaten/Kota</ion-label>\n      <ion-input type="text" readonly value="Mataram"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Telepon/Faksimili</ion-label>\n      <ion-input type="text" readonly value="(0370) 633040 Faksimili (0370) 622317"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>E-Mail</ion-label>\n      <ion-input type="text" readonly value="kanwilntb@kemenag.go.id"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Alamat Website</ion-label>\n      <ion-input type="text" readonly value="www.ntb.kemenag.go.id"></ion-input>\n    </ion-item>\n  </ion-list>\n  \n  <h3 text-center>B. Data Kepala Kantor Wilayah</h3>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Nama Kepala</ion-label>\n      <ion-input type="text" readonly value="H. NASARUDDIN"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>NIP</ion-label>\n      <ion-input type="text" readonly value="196512311986021003"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Jabatan</ion-label>\n      <ion-input type="text" readonly value="Kepala Kantor Wilayah Kementerian Agama Prov. NTB"></ion-input>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\identitas-satker\identitas-satker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], IdentitasSatkerPage);
    return IdentitasSatkerPage;
}());

//# sourceMappingURL=identitas-satker.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OlahDataLayananPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OlahDataLayananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OlahDataLayananPage = /** @class */ (function () {
    function OlahDataLayananPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OlahDataLayananPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OlahDataLayananPage');
    };
    OlahDataLayananPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-olah-data-layanan',template:/*ion-inline-start:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\olah-data-layanan\olah-data-layanan.html"*/'<!--\n  Generated template for the OlahDataLayananPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>olah-data-layanan</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\olah-data-layanan\olah-data-layanan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], OlahDataLayananPage);
    return OlahDataLayananPage;
}());

//# sourceMappingURL=olah-data-layanan.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalProvider = /** @class */ (function () {
    function GlobalProvider(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
    }
    GlobalProvider.prototype.config = function (name) {
        var config = {
            "apiMode": 0,
            "apiUrlOnline": "live.live.live",
            "apiUrlOffline": "http://localhost/api-ptsp/public/api/",
        };
        return config[name];
    };
    GlobalProvider.prototype.toastDefault = function (message, duration) {
        if (duration === void 0) { duration = 3000; }
        this.toastCtrl.create({
            message: message,
            duration: duration,
            cssClass: "toast-default",
        }).present();
    };
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Select2Option; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_api__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the InputDataLayananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Select2Option = /** @class */ (function () {
    function Select2Option(navCtrl, navParams, modalCtrl, viewCtrl, globalProvider, restApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.globalProvider = globalProvider;
        this.restApi = restApi;
        this.token = window.localStorage.getItem("token");
        this.criteria = {
            token: this.token,
        };
        this.from_module = this.navParams.get("from_module");
        if (this.from_module == 'penyelesaian_layanan') {
            this.title_module = "Data Layanan";
        }
        else if (this.from_module == 'instansi_org') {
            this.title_module = "Daftar Induk Organisasi";
            this.listOrg();
        }
    }
    Select2Option.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InputDataLayananPage');
    };
    Select2Option.prototype.setDataOption = function (data) {
        this.viewCtrl.dismiss(data);
    };
    Select2Option.prototype.listOrg = function () {
        var _this = this;
        var module = 'organisasi';
        var content = {
            token: this.criteria.token,
        };
        this.restApi.listData(content, module).then(function (result) {
            if (typeof result['message'] !== undefined && result['message'] == "SUCCESS") {
                _this.list_data = result['organisasi'];
            }
        });
    };
    Select2Option.prototype.dismiss = function (label, value) {
        if (label === void 0) { label = ""; }
        if (value === void 0) { value = ""; }
        var data = { label: label, value: value };
        this.viewCtrl.dismiss(data);
    };
    Select2Option = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-option',template:/*ion-inline-start:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\extra\select2_options.html"*/'<ion-header>\n\n	<ion-navbar color="secondary">\n\n			<ion-buttons left>\n\n				<button ion-button icon-only (click)="dismiss()" class="my-style-for-modal">\n\n					<ion-icon name="arrow-back"></ion-icon>\n\n				</button>\n\n			</ion-buttons>\n\n		<ion-title text-center>\n\n			Daftar {{ title_module }}\n\n		</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ng-container *ngIf="from_module == \'penyelesaian_layanan\'; else InstansiOrg">\n\n		<ion-list>\n\n			<ion-item (click)="setDataOption(\'Kw-19-19010200002\')">\n\n				<div style="float: left">\n\n					<h4><b>Kw-19-19010200002</b></h4>\n\n					<small style="display:block">No . 123</small>\n\n					<small style="display:block">27-01-2019</small>\n\n				</div>\n\n				<div style="float: right">\n\n					<small style="display:block">Drs. H. Hurma</small>\n\n					<small style="display:block">26-01-2019</small>\n\n					<small style="display:block">Proses</small>\n\n				</div>\n\n			</ion-item>\n\n			<ion-item (click)="setDataOption(\'ASD-123-19010200002\')">\n\n				<div style="float: left">\n\n					<h4><b>ASD-123-19010200002</b></h4>\n\n					<small style="display:block">No . 123</small>\n\n					<small style="display:block">27-01-2019</small>\n\n				</div>\n\n				<div style="float: right">\n\n					<small style="display:block">Drs. H. Hurma</small>\n\n					<small style="display:block">26-01-2019</small>\n\n					<small style="display:block">Proses</small>\n\n				</div>\n\n			</ion-item>\n\n		</ion-list>\n\n	</ng-container>\n\n	<ng-template #InstansiOrg>\n\n		<ng-container *ngIf="from_module == \'instansi_org\'; else selanjunya">\n\n			<ion-list>\n\n				<ion-item *ngFor="let list of list_data" (click)="dismiss(list.organisasi_name, list.organisasi_id)">\n\n					<ion-thumbnail item-left>\n\n						<img src="assets/images/instansi.png"/>\n\n					</ion-thumbnail>\n\n					{{ list.organisasi_name }}\n\n					<!-- <p>Induk : Kementrian Agama</p> -->\n\n				</ion-item>\n\n			</ion-list>\n\n		</ng-container>\n\n	</ng-template>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Developer02\Documents\ptsp-kanwil\src\pages\extra\select2_options.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_api__["a" /* RestApiProvider */]])
    ], Select2Option);
    return Select2Option;
}());

//# sourceMappingURL=select2_options.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.js.map