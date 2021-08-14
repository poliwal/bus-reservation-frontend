import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../shared/models/booking';
import { BusSeats } from '../shared/models/bus-seats';
import { BusDetails } from '../shared/models/busDetails';
import { CreditCard } from '../shared/models/creditcard';
import { Customer } from '../shared/models/customer';
import { Passenger } from '../shared/models/Passenger';
import { ReturnBooking } from '../shared/models/return-booking';
import { BookingService } from '../shared/services/booking.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  ccInfo:CreditCard={}

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
  seatSelect:BusSeats[]=[];

  ngOnInit(): void {
    this.onLoading()
  }

  onLoading(){
    this.booking = this.bookingService.booking;
    this.unAuthCust = this.bookingService.unAuthCust;
    // this.booking.cid = 1;
    this.bus = this.bookingService.busDetails;
    this.passengerList = this.bookingService.passengerlist;
    this.returnBusDetails = this.bookingService.returnBusDetails;
  }

  onSubmit()
  {
    console.log(this.unAuthCust);
    console.log(this.bookingService.booking);
    console.log(this.bookingService.busDetails);
    console.log(this.bookingService.returnBusDetails);
    console.log(this.bookingService.passengerlist);
    this.addUnAuthCustomer(this.unAuthCust);
    this.updateSeatsInDb();
    // this.addBookingToDb(this.booking);
    alert("Payment Done");
    this.router.navigate(["cust-dashboard"]);
  }

  addUnAuthCustomer(unAuthCust:Customer){
    this.bookingService.addCustomer(unAuthCust).subscribe(
      data=>{
        console.log(data);
        this.unAuthCust = data as Customer;
        this.addBookingToDb(this.unAuthCust.cid!, this.booking)
      },
      err=>{
        console.log(err);
      }
    );
  }

  updateSeatsInDb(){
    this.seatSelect = JSON.parse(localStorage.getItem("seatSelect")!);
    localStorage.removeItem("seatSelect");
    this.seatSelect.forEach(element => {
      this.bookingService.updateBusSeats(element).subscribe(
        data=>{
          console.log(data);
        },
        err => {
          console.log(err);
        }
      )
    });
  }

  addBookingToDb(cid:number,booking:Booking){
    booking.cid = cid;
    this.bookingService.addBooking(booking).subscribe(
      data=>{
        this.booking = data as Booking;
        // console.log(data);
        // console.log(this.booking.bookingId);

        this.addPassengersToDb(this.booking.bookingId);

        if(this.booking.isReturn){
          // console.log(this.booking.bookingId);
          this.addReturnBookingToDb(this.booking.bookingId);
        }
      },
      err=>{
        console.log(err);
      }
    );

    // this.deductFare(this.booking.cid,this.booking.totalFare);

    // this.getBusNoByBusScId(this.booking.busScId,this.booking.noOfPassengers);
    // if(this.booking.isReturn){
    //   this.getBusNoByBusScId(this.returnBusDetails.busScId!,this.booking.noOfPassengers);
    // }
    

  }

  addPassengersToDb(bookingId:number){
    // let bookingId = this.booking.bookingId;
    this.passengerList.forEach(element => {
      element.bookingId = bookingId;
    });
    this.bookingService.addPassengers(this.passengerList).subscribe(
      data=>{
        console.log(data);
      },
      err=>{
        console.log(err);
      }
    );
  }

  addReturnBookingToDb(bookingId:number){
    console.log(bookingId);
    this.returnBooking.bookingId = bookingId;
    this.returnBooking.busScId = this.returnBusDetails.busScId!;

    this.bookingService.addReturnBooking(this.returnBooking).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }


  // deductFare(cid:number,totalFare:number){
  //   this.bookingService.deductWalletAmount(cid,totalFare).subscribe(
  //     data => {
  //       console.log(data);
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }


  busSch:any;
  getBusNoByBusScId(busScId:number,noOfPassengers:number){
    this.bookingService.getBusSchedulebyid(busScId).subscribe(
      data=>{
        this.busSch = data;
        console.log(this.busSch);
        // this.reduceAvailableSeats(this.busSch.busNo,noOfPassengers);
      }
    );
  }

  // reduceAvailableSeats(busNo:number,noOfPassengers:number){
  //   console.log(busNo,noOfPassengers)
  //   this.bookingService.reduceAvailableSeats(busNo,noOfPassengers).subscribe(
  //     data=>{
  //       console.log(data);
  //     },
  //     err=>{
  //       console.log(err);
  //     }
  //   );
  // }

}
