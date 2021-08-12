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
    this.returnBusDetails = new BusDetails();
   }

  ngOnInit(): void {
    // this.fetchBus(123);
    this.datevalidation=localStorage.getItem('addedDay');
    localStorage.removeItem("addedDay");
    this.fetchBuslocal();
  }

  //static - this will be implemented when user books for a bus ticket from the prev list of buses

  bus: BusDetails;
  returnBusDetails:BusDetails;
  booking:Booking;
  isReturn:boolean;
  custSession:string;
  datevalidation:any;

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
    this.isReturn = this.bookingService.booking.isReturn
    if(this.isReturn){
      this.bus=this.bookingService.returnBusDetails;
      this.returnBusDetails = this.bookingService.returnBusDetails;
    }
    else{
      this.bus=this.bookingService.busDetails;
    }
    console.log(this.bus);
    console.log(this.returnBusDetails)
  } 


  onWholeBusDeselect() {
    // this.booking.noOfPassengers=null;
    this.booking.withDriver = false;

  }


  onReturnDeselect() {
    this.booking.returnDate = "";
  }

  onSubmit() {
    this.custSession= localStorage.getItem('cust')!;

    if(this.returnBusDetails.busScId){
      this.router.navigate(["cust-dashboard/seat-select"]);
    }
    else{
      this.bookingService.busDetails = this.bus;
      
      if (this.booking.wholeBus == true) {
        this.booking.totalFare = (this.bus.fare * 24) + 3000;
        this.booking.securityDeposit = 30000;
      }

      // this.booking.busId = this.bus.busScId;
      this.booking.status = "Booked";
      this.booking.busScId = this.bus.busScId!;
      this.bookingService.booking = this.booking;

      if(this.booking.wholeBus){
        if(this.custSession=='zxc'){
          this.router.navigate(["cust-dashboard/booking-confirmation"]);
        }
        else{
          this.router.navigate(["cust-dashboard/unauth-booking-confirmation"]);
        }
      }
      else{
        this.router.navigate(["cust-dashboard/seat-select"])
      }
    }
    

    
    // else {
    //    this.booking.totalFare = this.booking.noOfPassengers * this.bus.fare;
    // }

    

    // console.log(this.booking);
    // console.log(this.bookingService.booking);

  }

}
