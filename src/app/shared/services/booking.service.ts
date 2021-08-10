import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BusSeats } from '../models/bus-seats';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  readonly UrlBs = "http://localhost:43836/api/buses"

  constructor(private http:HttpClient) { }

  getBusSeatNos(busId:number){
    return this.http.get(this.UrlBs+'/'+busId);
  }

  updateBusSeats(seats:BusSeats){
    return this.http.put(this.UrlBs+'/'+seats.seatId,seats);
  }

  getBusbyid(id?:number){
    return this.http.get(this.UrlBs+"/"+id);
  }
}
