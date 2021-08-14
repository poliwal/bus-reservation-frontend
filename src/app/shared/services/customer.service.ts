import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Customer } from '../models/customer';
import { BookingsPage } from '../models/bookings-page';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  // readonly UrlCustomerCidForEmail = "http://localhost:43836/api/Customers/getCidByEmail?Email=";
  readonly UrlCustomerChangePassword = "http://localhost:43836/api/Customers/change-password";
  readonly UrlCustomerResetPassword = "http://localhost:43836/api/Customers/reset-password";
  readonly UrlCustomer = "http://localhost:43836/api/Customers";
  readonly UrlCustomerLogin = "http://localhost:43836/api/Customers/login";
  readonly UrlCustomerRegister = "http://localhost:43836/api/Customers/register";
  readonly UrlCustomerBookings = "http://localhost:43836/api/Bookings/bookingForCid?id=";
  readonly UrlCustomerForgotPassword = "http://localhost:43836/api/Customers/forgotPassword";


  cid:number;
  customer:Customer;
  bookingsList:BookingsPage[];
  bookingDetails:BookingsPage;

  getCidForEmail(email:string){
    return this.http.get(`${this.UrlCustomer}/getCidByEmail?Email=${email}`);
  }

  changePassword(cid:number,cp:string,np:string,cnp:string){
    return this.http.put(`${this.UrlCustomerChangePassword}?cid=${cid}&cp=${cp}&np=${np}&cnp=${cnp}`,null,{responseType:'text'});
  }

  resetPassword(cid:number,np:string,cnp:string){
    return this.http.put(`${this.UrlCustomerResetPassword}?cid=${cid}&np=${np}&cnp=${cnp}`,null,{responseType:'text'});
  }

  getCustomer(cid:number){
    return this.http.get(this.UrlCustomer+'/'+cid);
  }

  updateCustomer(cid:number,customer:Customer){
    return this.http.put(this.UrlCustomer+'/'+cid,customer,{responseType:'text'});
  }

  registerCustomer(cp:string,customer:Customer){
    return this.http.post(`${this.UrlCustomerRegister}?cp=${cp}`,customer,{responseType:'text'});
  }

  getBookingsForCid(cid:number){
    return this.http.get(this.UrlCustomerBookings+cid);
  }

  doLogin(useremail : string, userpassword: string){
    return this.http.get<any>(this.UrlCustomerLogin+"?email="+useremail+"&password="+userpassword);
  }

  forgotPassword(useremail : string){
    return this.http.get(this.UrlCustomerForgotPassword+"?email="+useremail,{responseType:'text'});
  }
}
