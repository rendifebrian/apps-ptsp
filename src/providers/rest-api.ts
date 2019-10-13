import { HttpClient , HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { GlobalProvider } from './global';

/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestApiProvider {

  // Defined url
	apiUrl 			= this.globalProvider.config("apiUrlOnline"); 

  constructor(
    public http: HttpClient,
    public globalProvider     : GlobalProvider,
  ) {
    var apiUrlMode 	= this.globalProvider.config("apiMode");
		if(apiUrlMode == 0)
		{
			this.apiUrl = this.globalProvider.config("apiUrlOffline");
		}
  }

  auth(data)
  {
    return new Promise( (resolve, reject) => 
		{
			this.http.post(this.apiUrl + 'login', JSON.stringify(data))
			.timeout(25000)
			.subscribe(result => 
			{
				resolve(result);
			}, (err) => 
			{
				if (typeof err['status'] !== undefined && err['status'] == 401) 
				{
					var resp1 = { message: 401 };
					resolve(resp1);
				}	
				else
				{
					resolve(err);
				}
			});
    });
	}

	listData(criteria, module)
	{
		return new Promise( (resolve, reject) => 
		{
			let used = (criteria.used !== undefined) ? criteria.used : ""; 
			this.http.get(this.apiUrl + 'listing-data?token=' + criteria.token + '&module=' + module + '&used=' + used)
			.timeout(25000)
			.subscribe(result => 
			{
				resolve(result);
			}, (err) => 
			{
				if (typeof err['status'] !== undefined && err['status'] == 401) 
				{
					var resp1 = { message: 401 };
					resolve(resp1);
				}	
				else
				{
					resolve(err);
				}
			});
    });
	}
	
	saveData(criteria, token)
	{
		return new Promise( (resolve, reject) => 
		{
			this.http.post(this.apiUrl + 'create-data?token='+ token, JSON.stringify(criteria))
			.timeout(25000)
			.subscribe(result => 
			{
				resolve(result);
			}, (err) => 
			{
				if (typeof err['status'] !== undefined && err['status'] == 401) 
				{
					var resp1 = { message: 401 };
					resolve(resp1);
				}	
				else
				{
					resolve(err);
				}
			});
    });
	}

	deleteData(criteria)
	{
		return new Promise( (resolve, reject) => 
		{
			this.http.post(this.apiUrl + 'delete-data?token='+ criteria.token, JSON.stringify(criteria))
			.timeout(25000)
			.subscribe(result => 
			{
				resolve(result);
			}, (err) => 
			{
				if (typeof err['status'] !== undefined && err['status'] == 401) 
				{
					var resp1 = { message: 401 };
					resolve(resp1);
				}	
				else
				{
					resolve(err);
				}
			});
    });
	}

	updateData(criteria, token)
	{
		return new Promise( (resolve, reject) => 
		{
			this.http.post(this.apiUrl + 'updated-data?token='+ token, JSON.stringify(criteria))
			.timeout(25000)
			.subscribe(result => 
			{
				resolve(result);
			}, (err) => 
			{
				if (typeof err['status'] !== undefined && err['status'] == 401) 
				{
					var resp1 = { message: 401 };
					resolve(resp1);
				}	
				else
				{
					resolve(err);
				}
			});
    });
	}

}
