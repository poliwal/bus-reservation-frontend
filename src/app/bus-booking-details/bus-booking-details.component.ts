import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../shared/models/booking';

import { Bus } from '../shared/models/bus';
import { BusDetails } from '../shared/models/busDetails';
import { BookingService } from '../shared/services/booking.service';

@Component({
  selector: 'app-bus-booking-details',
  templateUrl: './bus-booking-details.component.html',
  styleUrls: ['./bus-booking-details.component.css']
})
export class BusBookingDetailsComponent implements OnInit {

  constructor(private bookingService:BookingService, private router:Router) {
    this.booking=new Booking();
   }

  ngOnInit(): void {
    // this.fetchBus(123);
    this.fetchBuslocal();
  }

  //static - this will be implemented when user books for a bus ticket from the prev list of buses

  bus: BusDetails;
  returnBusDetails:BusDetails;

  fetchBus(id?: number) {
    this.bookingService.getBusbyid(id).subscribe((data) => {
      console.log(data);
      this.bus = data as Bus;
      // this.bus=this.bus1;
    }

    );
  }

  
  fetchBuslocal()
  {
    this.bus=this.bookingService.busDetails;
    console.log(this.bus);
    this.returnBusDetails = this.bookingService.returnBusDetails;
    console.log(this.returnBusDetails)
  } 

  booking: Booking;




  onWholeBusDeselect() {
    // this.booking.noOfPassengers=null;
    this.booking.withDriver = false;

  }




  onReturnDeselect() {
    this.booking.returnDate = "";
  }

  onSubmit() {
    if(this.returnBusDetails.busScId){
      this.router.navigate(["seat-select"]);
    }
    else{
      this.bookingService.busDetails = this.bus;
      
      if (this.booking.wholeBus == true) {
        this.booking.totalFare = (this.bus.fare * 24) + 3000;
        this.booking.securityDeposit = 30000;
      }

      // this.booking.busId = this.bus.busScId;
      this.booking.status = "Booked";

      this.bookingService.booking = this.booking;

      if(this.booking.wholeBus){
        this.router.navigate(["booking-confirmation"]);
      }
      else{
        this.router.navigate(["seat-select"])
      }
    }
    

    
    // else {
    //    this.booking.totalFare = this.booking.noOfPassengers * this.bus.fare;
    // }

    

    // console.log(this.booking);
    // console.log(this.bookingService.booking);

  }

}
