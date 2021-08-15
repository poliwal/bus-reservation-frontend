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

}
