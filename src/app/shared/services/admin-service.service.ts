import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Bus } from '../models/bus';
import { BusSeats } from '../models/bus-seats';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  readonly Url = "http://localhost:43836/api/buses"
  readonly UrlBs = "http://localhost:43836/api/BusSeatNoes"

  editBusDetails:Bus;
  
  constructor(private http:HttpClient) { }

  addBus(bus:Bus){
    return this.http.post(this.Url,bus);
  }

  getBus(busId:number){
    return this.http.get(this.Url+'/'+busId);
  }

  getAllBus(){
    return this.http.get(this.Url);
  }

  deleteBus(busId:number){
    return this.http.delete(this.Url+'/'+busId);
  }

  setEditBusDetails(busDetails:Bus){
    this.editBusDetails = busDetails;
  }

  getEditBusDetails(){
    return this.editBusDetails;
  }

  updateBusDetailsService(bus:Bus){
    return this.http.put(this.Url+'/'+bus.busId, bus);
  }

  addBusSeatNos(busSeats:BusSeats[]){
    return this.http.post(this.UrlBs,busSeats,{responseType:'text'});
  }

  
}
