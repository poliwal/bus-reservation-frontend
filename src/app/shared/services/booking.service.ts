import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BusSeats } from '../models/bus-seats';
import { Passenger } from '../models/Passenger';
import { Booking } from '../models/booking';
import { Bus } from '../models/bus';
import { BusDetails } from '../models/busDetails';



@Injectable({
  providedIn: 'root'
})
export class BookingService {

  readonly UrlBusSeat = "http://localhost:43836/api/BusSeatNoes"
  readonly UrlBus = "http://localhost:43836/api/buses"

  constructor(private http: HttpClient) { 
    this.busDetails = new BusDetails();
    this.booking = new Booking();
    this.returnBusDetails = new BusDetails();
  }

  busList: BusDetails[] = [{
    busScId:4,departureDate:"2021-08-12",
    busNo: 101, busName: "Velocity", source: "Mumbai",
    destination: "Delhi",
    departureTime: "22:10",
    arrivalTime: "12:20",
    noOfSeats: 23,
    via: "Bangalore",
    fare: 2500, driverName: "John",
    driverAge: 30,
    driverExperience: 5
  },

  {
    busScId:4,departureDate:"2021-08-12",
    busNo: 101, busName: "PanExpress", source: "Delhi",
    destination: "Mumbai",
    departureTime: "20:00",
    arrivalTime: "15:30",
    noOfSeats: 23,
    via: "Pune",
    fare: 2500, driverName: "Jack",
    driverAge: 35,
    driverExperience: 4
  }
  ];

  booking: Booking;

  returnBusDetails: BusDetails;

  busDetails: BusDetails;

  bookedseats: number[] = [];

  passengerlist: Passenger[];

  getBusSeatNos(busId?: number) {
    return this.http.get(this.UrlBusSeat + '/' + busId);
  }

  updateBusSeats(seats: BusSeats) {
    return this.http.put(this.UrlBusSeat + '/' + seats.seatId, seats);
  }

  getBusbyid(id?: number) {
    return this.http.get(this.UrlBus + "/" + id);
  }
}
