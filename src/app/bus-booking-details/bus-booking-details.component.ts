import { Component, OnInit } from '@angular/core';
import { Booking } from '../shared/models/booking';
import { Bus } from '../shared/models/bus';
import { BookingService } from '../shared/services/booking.service';

@Component({
  selector: 'app-bus-booking-details',
  templateUrl: './bus-booking-details.component.html',
  styleUrls: ['./bus-booking-details.component.css']
})
export class BusBookingDetailsComponent implements OnInit {

  constructor(private bookingService:BookingService) {
    this.booking=new Booking();
   }

  ngOnInit(): void {
    this.fetchBus(101);
  }

  //static - this will be implemented when user books for a bus ticket from the prev list of buses

  // bus1:any;
  bus: Bus;
  fetchBus(id?: number) {
    this.bookingService.getBusbyid(id).subscribe((data) => {
      console.log(data);
      this.bus = data as Bus;
      // this.bus=this.bus1;
    }

    );
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
    this.booking.busId = this.bus.busId;
    this.booking.status = "Booking";

    if (this.booking.wholeBus == true) {
      this.booking.totalFare = (this.bus.fare * 24) + 3000;
      this.booking.securityDeposit = 3000;
    }
    else {
      this.booking.totalFare = this.booking.noOfPassengers * this.bus.fare;
    }


    console.log(this.booking);
  }

}
