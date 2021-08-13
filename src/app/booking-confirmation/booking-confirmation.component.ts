import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../shared/models/booking';
import { Bus } from '../shared/models/bus';
import { BusSeats } from '../shared/models/bus-seats';
import { BusDetails } from '../shared/models/busDetails';
import { Passenger } from '../shared/models/Passenger';
import { ReturnBooking } from '../shared/models/return-booking';
import { BookingService } from '../shared/services/booking.service';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent implements OnInit {

  booking:Booking;
  bus:BusDetails;
  passengerList:Passenger[];
  returnBusDetails:BusDetails;
  returnBooking:ReturnBooking;
  seatSelect:BusSeats[]=[];

  constructor(private bookingService:BookingService, private router:Router) {
    this.booking = new Booking();
    this.bus = new BusDetails();
    this.returnBooking = new ReturnBooking();
  }

  ngOnInit(): void {
    this.onLoading();
  }

  onLoading(){
    this.booking = this.bookingService.booking;
    this.booking.cid = Number(localStorage.getItem('cid')!);
    this.bus = this.bookingService.busDetails;
    this.passengerList = this.bookingService.passengerlist;
    this.returnBusDetails = this.bookingService.returnBusDetails;
    // console.log(this.bookingService.booking);
    // console.log(this.bookingService.busDetails);
    // console.log(this.bookingService.returnBusDetails);
    // console.log(this.bookingService.passengerlist);

    
  }

  pay(){
    this.addBookingToDb(this.booking);
    this.updateSeatsInDb();
    alert("Payment Done");
  }

  addBookingToDb(booking:Booking){
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

    this.deductFare(this.booking.cid,this.booking.totalFare);

    // this.getBusNoByBusScId(this.booking.busScId,this.booking.noOfPassengers);
    // if(this.booking.isReturn){
    //   this.getBusNoByBusScId(this.returnBusDetails.busScId!,this.booking.noOfPassengers);
    // }
    

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


  deductFare(cid:number,totalFare:number){
    this.bookingService.deductWalletAmount(cid,totalFare).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }


  busSch:any;
  getBusNoByBusScId(busScId:number,noOfPassengers:number){
    this.bookingService.getBusSchedulebyid(busScId).subscribe(
      data=>{
        this.busSch = data;
        console.log(this.busSch);
        this.reduceAvailableSeats(this.busSch.busNo,noOfPassengers);
      }
    );
  }

  reduceAvailableSeats(busNo:number,noOfPassengers:number){
    console.log(busNo,noOfPassengers)
    this.bookingService.reduceAvailableSeats(busNo,noOfPassengers).subscribe(
      data=>{
        console.log(data);
      },
      err=>{
        console.log(err);
      }
    );
  }

}

