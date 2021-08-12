import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BusSeats } from '../models/bus-seats';
import { Passenger } from '../models/Passenger';
import { Booking } from '../models/booking';
import { BusDetails } from '../models/busDetails';
import { ReturnBooking } from '../models/return-booking';




@Injectable({
  providedIn: 'root'
})
export class BookingService {

  readonly UrlBusSeat = "http://localhost:43836/api/BusSeatNoes"
  readonly UrlBus = "http://localhost:43836/api/buses/reduceSeats"
  readonly UrlBusSearch = "http://localhost:43836/api/BusSchedules"
  readonly UrlBooking = "http://localhost:43836/api/Bookings"
  readonly UrlPassenger = "http://localhost:43836/api/PassengerDetails"
  readonly UrlReturn = "http://localhost:43836/api/ReturnBookings"
  readonly UrlCustomer = "http://localhost:43836/api/Customers/deductFare"

  constructor(private http: HttpClient) { 
    this.busDetails = new BusDetails();
    this.booking = new Booking();
    this.returnBusDetails = new BusDetails();
  }

  booking: Booking;

  returnBusDetails: BusDetails;

  busDetails: BusDetails;

  bookedseats: number[] = [];

  passengerlist: Passenger[];

  // busList: BusDetails[] = [{
  //   busScId:6,departureDate:"2021-08-12",
  //   busNo: 101, busName: "Velocity", source: "Mumbai",
  //   destination: "Delhi",
  //   departureTime: "22:10",
  //   arrivalTime: "12:20",
  //   noOfSeats: 23,
  //   via: "Bangalore",
  //   fare: 2500, driverName: "John",
  //   driverAge: 30,
  //   driverExperience: 5
  // },

  // {
  //   busScId:6,departureDate:"2021-08-12",
  //   busNo: 101, busName: "PanExpress", source: "Delhi",
  //   destination: "Mumbai",
  //   departureTime: "20:00",
  //   arrivalTime: "15:30",
  //   noOfSeats: 23,
  //   via: "Pune",
  //   fare: 2500, driverName: "Jack",
  //   driverAge: 35,
  //   driverExperience: 4
  // }
  // ];

 

  getBusSeatNos(busId?: number) {
    return this.http.get(this.UrlBusSeat + '/' + busId);
  }

  updateBusSeats(seats: BusSeats) {
    return this.http.put(this.UrlBusSeat + '/' + seats.seatId, seats);
  }

  getBusbyid(id?: number) {
    return this.http.get(this.UrlBus + "/" + id);
  }

  getBusSchedulebyid(id?: number) {
    return this.http.get(this.UrlBusSearch + "/" + id);
  }

  searchBuses(source:string, destination:string, date:string){
    return this.http.get(`${this.UrlBusSearch}/searchBuses?source=${source}&destination=${destination}&date=${date}`)
  }

  addBooking(booking:Booking){
    return this.http.post(this.UrlBooking,booking);
  }

  addPassengers(passengersList:Passenger[]){
    return this.http.post(this.UrlPassenger,passengersList);
  }

  addReturnBooking(returnBookingDetails:ReturnBooking){
    return this.http.post(this.UrlReturn,returnBookingDetails);
  }

  deductWalletAmount(cid:number,totalFare:number){
    return this.http.put(`${this.UrlCustomer}?cid=${cid}&fare=${totalFare}`,null,{responseType:'text'});
  }

  reduceAvailableSeats(busNo:number,num:number){
    return this.http.put(`${this.UrlBus}?busNo=${busNo}&num=${num}`,null,{responseType:'text'});
  }
}
