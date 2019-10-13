import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';

import { RestApiProvider } from '../providers/rest-api';
import { GlobalProvider } from '../providers/global';

import { HomePage } from '../pages/home/home';
import { UserPage } from '../pages/user/user';

import { UserCreatePage } from '../pages/user/user_create';

import { Select2Option } from '../pages/extra/select2_options';

import { InstansiPage } from '../pages/instansi/instansi';
import { InstansiCreatePage } from '../pages/instansi/instansi_create';
import { InstansiEditPage } from '../pages/instansi/instansi_edit';

import { OrganisasiPage } from '../pages/organisasi/organisasi';
import { OrganisasiCreatePage } from '../pages/organisasi/organisasi_create';
import { OrganisasiEditPage } from '../pages/organisasi/organisasi_edit';

import { GolonganPage } from '../pages/golongan/golongan';
import { GolonganCreatePage } from '../pages/golongan/golongan_create';
import { GolonganEditPage } from '../pages/golongan/golongan_edit';

import { GroupPage } from '../pages/group/group';
import { GroupEditPage } from '../pages/group/group_edit';
import { GroupCreatePage } from '../pages/group/group_create';

import { LayananPage } from '../pages/layanan/layanan';
import { LayananCreatePage } from '../pages/layanan/layanan_create';
import { LayananEditPage } from '../pages/layanan/layanan_edit';

import { LayananJenisPage } from '../pages/layanan_jenis/layanan_jenis';
import { LayananJenisCreatePage } from '../pages/layanan_jenis/layanan_jenis_create';
import { LayananJenisEditPage } from '../pages/layanan_jenis/layanan_jenis_edit';

import { LayananOutputPage } from '../pages/layanan-output/layanan_output';
import { LayananOutputCreatePage } from '../pages/layanan-output/layanan_output_create';
import { LayananOutputEditPage } from '../pages/layanan-output/layanan_output_edit';

import { LayananSyaratPage } from '../pages/layanan-syarat/layanan_syarat';
import { LayananSyaratCreatePage } from '../pages/layanan-syarat/layanan_syarat_create';
import { LayananSyaratEditPage } from '../pages/layanan-syarat/layanan_syarat_edit';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    UserPage,

    UserCreatePage,
    
    InstansiPage,
    InstansiCreatePage,
    InstansiEditPage,

    OrganisasiPage,
    OrganisasiCreatePage,
    OrganisasiEditPage,

    GolonganPage,
    GolonganCreatePage,
    GolonganEditPage,

    GroupPage,
    GroupEditPage,
    GroupCreatePage,

    LayananPage,
    LayananCreatePage,
    LayananEditPage,

    LayananJenisPage,
    LayananJenisCreatePage,
    LayananJenisEditPage,
    
    LayananOutputPage,
    LayananOutputCreatePage,
    LayananOutputEditPage,

    LayananSyaratPage,
    LayananSyaratCreatePage,
    LayananSyaratEditPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: UserPage, name: 'UserPage', segment: 'user' },
        { component: HomePage, name: 'HomePage', segment: 'home' },
        { component: OrganisasiPage, name: 'OrganisasiPage', segment: 'organisasi'},
        { component: InstansiPage, name: 'InstansiPage', segment: 'instansi' },
        { component: GolonganPage, name: 'GolonganPage', segment: 'golongan' },
        { component: GroupPage, name: 'GroupPage', segment: 'group' },
        { component: LayananPage, name: 'LayananPage', segment: 'layanan' },
        { component: LayananJenisPage, name: 'LayananJenisPage', segment: 'layanan-jenis' },
        { component: LayananOutputPage, name: 'LayananOutputPage', segment: 'layanan-output' },
        { component: LayananSyaratPage, name: 'LayananSyaratPage', segment: 'layanan-syarat' },
        
      ]
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    UserPage,
    InstansiPage,

    UserCreatePage,
    
    InstansiCreatePage,
    InstansiEditPage,

    OrganisasiPage,
    OrganisasiCreatePage,
    OrganisasiEditPage,

    GolonganPage,
    GolonganCreatePage,
    GolonganEditPage,

    GroupPage,
    GroupEditPage,
    GroupCreatePage,

    LayananPage,
    LayananCreatePage,
    LayananEditPage,

    LayananJenisPage,
    LayananJenisCreatePage,
    LayananJenisEditPage,

    LayananOutputPage,
    LayananOutputCreatePage,
    LayananOutputEditPage,

    LayananSyaratPage,
    LayananSyaratCreatePage,
    LayananSyaratEditPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestApiProvider,
    GlobalProvider,
  ]
})
export class AppModule {}
