import { Component, OnInit } from '@angular/core';
import { BusDetails } from '../shared/models/busDetails';
import { Passenger } from '../shared/models/Passenger';
import { BookingService } from '../shared/services/booking.service';
import { BusSeats } from '../shared/models/bus-seats';
import { Booking } from '../shared/models/booking';
import { BookingsPage } from '../shared/models/bookings-page';
import { CustomerService } from '../shared/services/customer.service';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent implements OnInit {

  constructor(private bookingservice:BookingService, private custService:CustomerService) { }

  bookingId:number;

  //construct a way inorder that all the booking/passenger details are displayed and that the
  //values for that bookingid are assigned to the local object
   

  ngOnInit(): void {
    this.singleBookingDetails = this.custService.bookingDetails;
    //  this.bookingDetails(8);
    //  this.getPassenger(8);
    //  this.getPassengerSeatNo(8);
    //  this.getBusSeatNoTable(4);

     this.onLoadFetch(this.singleBookingDetails.bookingId,this.singleBookingDetails.busScId)
    
  }

  singleBookingDetails:BookingsPage;
  
  booking:Booking;


  passenger:Passenger[];
  
  
  seatNo:number[];
  returnSeatNo:number[];
  busSeats:BusSeats[];

  //from previous page get the booking details and store it in a variable
  //and call this onloadfetch inside ngoninit
  onLoadFetch(bookingid:number,busscid:number)
  {
    this.bookingDetails(bookingid);
    this.getPassenger(bookingid);
    this.getPassengerSeatNo(bookingid);
    this.getPassengerReturnSeatNo(bookingid);
    this.getBusSeatNoTable(busscid);
  }


  bookingDetails(bookingid:number)
  {
    this.bookingservice.getBooking(bookingid).subscribe(
      (data)=>{
        this.booking=data as Booking;
      }
    );
  }

  getPassenger(bookingid:number)
  {
    this.bookingservice.getPassenger(bookingid).subscribe(
      (data)=>
      {
      this.passenger=data as Passenger[];
      console.log(this.passenger);
      }
    );  

  }

  
  getPassengerSeatNo(bookingid:number)
  {
    this.bookingservice.getPassengerSeatNo(bookingid).subscribe(
      (data)=>{
        this.seatNo=data as number[];
        console.log(this.seatNo);
      }
    );
  }

  //use isreturn check
  getPassengerReturnSeatNo(bookingid:number)
  {
    this.bookingservice.getPassengerReturnSeatNo(bookingid).subscribe(
      (data)=>{
        this.returnSeatNo=data as number[];
      }
    );
  }

  getBusSeatNoTable(busscid:number)
  {
    this.bookingservice.getBusSeatNoTable(busscid).subscribe(
      (data)=>{
        this.busSeats=data as BusSeats[];
        console.log(this.busSeats);
      }
    );
  }

  refundFare(cid:number,totalFare:number){
    this.bookingservice.refundWalletAmount(cid,totalFare).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  onCancel()
  {
  
     if(this.booking.isReturn)
     {
      this.busSeats.forEach(element=>
          {
            if(this.returnSeatNo.includes(element.seatNo))
            {
              element.isAvailable=true;
              this.bookingservice.putBusSeatNoTable(element).subscribe(
                data=>
                {
                  console.log(data);
                },
                err=>{
                  console.log(err);
                }
              );
            }
          }
       );
  
     }
    
     else{
        this.busSeats.forEach(element=>
          {
            if(this.seatNo.includes(element.seatNo))
              { 
                console.log(element);
                element.isAvailable=true;
                console.log(element);
                this.bookingservice.putBusSeatNoTable(element).subscribe(
                  data=>
                  {
                    console.log(data);
                  },
                  err=>{
                    console.log(err);
                  }
                )
              }
          }
        );
    }
    
    
    this.refundFare(this.booking.cid,this.booking.totalFare);
    this.booking.status="Cancelled";
    this.bookingservice.putBooking(this.booking).subscribe(
      data=>
      {
        console.log(data);
      },
      err=>
      {
        console.log(err);
      }
    )
    alert("Booking Cancelled");
  }
         


}
