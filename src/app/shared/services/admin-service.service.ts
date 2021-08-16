import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Bus } from '../models/bus';
import { BusSeats } from '../models/bus-seats';
import { BusSchedule } from '../models/busSchedule';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  readonly Url = "http://localhost:43836/api/buses"
  readonly UrlSeat = "http://localhost:43836/api/BusSeatNoes"
  readonly UrlSchedule = "http://localhost:43836/api/BusSchedules"
  readonly UrlAdminLogin = "http://localhost:43836/api/Admins/adminlogin"

  readonly UrlBooking = "http://localhost:43836/api/Bookings"
  readonly UrlCustomer = "http://localhost:43836/api/Customers"

  editBusDetails:Bus;
  
  constructor(private http:HttpClient) { }

  addBus(bus:Bus){
    return this.http.post(this.Url,bus);
  }

  getBus(busNo:number){
    return this.http.get(this.Url+'/'+busNo);
  }

  getAllBus(){
    return this.http.get(this.Url);
  }

  deleteBus(busNo:number){
    return this.http.delete(this.Url+'/'+busNo);
  }

  setEditBusDetails(busDetails:Bus){
    this.editBusDetails = busDetails;
  }

  getEditBusDetails(){
    return this.editBusDetails;
  }

  updateBusDetailsService(bus:Bus){
    return this.http.put(this.Url+'/'+bus.busNo, bus);
  }

  addBusSeatNos(busSeats:BusSeats[]){
    return this.http.post(this.UrlSeat,busSeats,{responseType:'text'});
  }

  addBusSchedule(busSchedule:BusSchedule){
    return this.http.post(this.UrlSchedule,busSchedule);
  }
  
  getBusSchedules(){
    return this.http.get(this.UrlSchedule);
  }
  
  doLogin(username:string,password:string){
    return this.http.get(`${this.UrlAdminLogin}?username=${username}&password=${password}`,{responseType:'text'});
  }

  //last month record and profits
  getLastMonthRecordAndProfits(lastMonthDate:string,currentDate:string)
  {
    return this.http.get(`${this.UrlBooking}/lastMonthRecordAndProfits?lastMonthDate=${lastMonthDate}&currentDate=${currentDate}`);
  }

  //get customers with no reservation
  getCustomersWithNoReservation()
  {
    return this.http.get(`${this.UrlCustomer}/getCustomersWithNoReservation`);
  }

  //get customer reservation details of today
  getCustomerReservationDetailsOfToday(currentDate:string)
  {
    return this.http.get(`${this.UrlBooking}/getCustomerReservationDetailsOfToday?currentDate=${currentDate}`);
  }

  //get customer reservation details of week
  getCustomerReservationDetailsOfWeek(weekDate:string,currentDate:string)
  {
    return this.http.get(`${this.UrlBooking}/getCustomerReservationDetailsOfWeek?weekDate=${weekDate}&currentDate=${currentDate}`);
  }

  //get customer reservation details of month
  getCustomerReservationDetailsOfMonth(monthDate:string,currentDate:string)
  {
    return this.http.get(`${this.UrlBooking}/getCustomerReservationDetailsOfMonth?monthDate=${monthDate}&currentDate=${currentDate}`);
  }

  //get frquently travelled routes
  getFrequentlyTravelledRoutes()
  {
    return this.http.get(`${this.Url}/getFrequentlyTravelledRoutes`);
  }
}
