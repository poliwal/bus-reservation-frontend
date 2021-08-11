import { Component, OnInit } from '@angular/core';
import { Booking } from '../shared/models/booking';
import { Bus } from '../shared/models/bus';
import { BookingService } from '../shared/services/booking.service';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent implements OnInit {

  booking:Booking
  bus:Bus;

  constructor(private bookingService:BookingService) {
    this.booking = new Booking();
    this.bus = new Bus();
  }

  ngOnInit(): void {
    this.onLoading();
  }

  onLoading(){
    this.booking = this.bookingService.booking;
    this.bus = this.bookingService.busDetails;
    console.log(this.bookingService.booking);
    console.log(this.bookingService.busDetails);
    console.log(this.bookingService.returnBusDetails);
    console.log(this.bookingService.passengerlist);
  }

  pay(){
    alert("Payment Done");
  }

}

