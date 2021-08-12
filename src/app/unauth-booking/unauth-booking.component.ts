import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../shared/models/booking';
import { BusDetails } from '../shared/models/busDetails';
import { Customer } from '../shared/models/customer';
import { Passenger } from '../shared/models/Passenger';
import { ReturnBooking } from '../shared/models/return-booking';
import { BookingService } from '../shared/services/booking.service';

@Component({
  selector: 'app-unauth-booking',
  templateUrl: './unauth-booking.component.html',
  styleUrls: ['./unauth-booking.component.css']
})
export class UnauthBookingComponent implements OnInit {

  constructor(private bookingService:BookingService, private router:Router) {
    this.booking = new Booking();
    this.bus = new BusDetails();
    this.returnBooking = new ReturnBooking();
  }

  unAuthCust:Customer = {};
  booking:Booking;
  bus:BusDetails;
  passengerList:Passenger[];
  returnBusDetails:BusDetails;
  returnBooking:ReturnBooking;

  ngOnInit(): void {
    this.onLoading()
  }

  onLoading(){
    this.booking = this.bookingService.booking;
    // this.booking.cid = 1;
    this.bus = this.bookingService.busDetails;
    this.passengerList = this.bookingService.passengerlist;
    this.returnBusDetails = this.bookingService.returnBusDetails;
  }

  onConfirm()
  {
    console.log(this.unAuthCust);
    console.log(this.bookingService.booking);
    console.log(this.bookingService.busDetails);
    console.log(this.bookingService.returnBusDetails);
    console.log(this.bookingService.passengerlist);
    this.bookingService.unAuthCust = this.unAuthCust;
    this.router.navigate(["payment-form"]);
  }
}
