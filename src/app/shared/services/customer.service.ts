import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  readonly UrlCustomerPassword = "http://localhost:43836/api/Customers/change-password";
  readonly UrlCustomer = "http://localhost:43836/api/Customers";

  cid:number;
  customer:Customer;

  changePassword(cid:number,cp:string,np:string,cnp:string){
    return this.http.put(`${this.UrlCustomerPassword}?cid=${cid}&cp=${cp}&np=${np}&cnp=${cnp}`,null,{responseType:'text'});
  }

  getCustomer(cid:number){
    return this.http.get(this.UrlCustomer+'/'+cid);
  }

  updateCustomer(cid:number,customer:Customer){
    return this.http.put(this.UrlCustomer+'/'+cid,customer,{responseType:'text'});
  }
}
