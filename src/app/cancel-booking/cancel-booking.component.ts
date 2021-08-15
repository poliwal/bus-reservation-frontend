import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BusDetails } from '../shared/models/busDetails';
import { Passenger } from '../shared/models/Passenger';
import { BookingService } from '../shared/services/booking.service';
import { BusSeats } from '../shared/models/bus-seats';
import { Booking } from '../shared/models/booking';
import { BookingsPage } from '../shared/models/bookings-page';
import { CustomerService } from '../shared/services/customer.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { ReturnBookingDetails } from '../shared/models/return-booking-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent implements OnInit {

  @ViewChild('htmlData') htmlData: ElementRef;
  public openPDF(): void {
    let DATA = document.getElementById('htmlData');

    html2canvas(DATA!).then(canvas => {
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

      PDF.save('Ticket.pdf');
    });
  }

  
  constructor(private bookingservice: BookingService, private custService: CustomerService, private router:Router) { }

  bookingId: number;

  //construct a way inorder that all the booking/passenger details are displayed and that the
  //values for that bookingid are assigned to the local object


  ngOnInit(): void {
    this.singleBookingDetails = JSON.parse(localStorage.getItem("bookingDetails")!);
    // this.singleBookingDetails = this.custService.bookingDetails;
    //  this.bookingDetails(8);
    //  this.getPassenger(8);
    //  this.getPassengerSeatNo(8);
    //  this.getBusSeatNoTable(4);

    this.onLoadFetch(this.singleBookingDetails.bookingId, this.singleBookingDetails.busScId)
    let depdate = new Date(this.singleBookingDetails.departureDate);
    var date1 = new Date(this.currdate);
    var date2 = new Date(depdate);

    var Time = date2.getTime() - date1.getTime();
    var DayDiff = Time / (1000 * 3600 * 24); //Diference in Days
    this.dayRem = DayDiff;
    console.log(DayDiff);
  }

  currdate: any = new Date();
  dayRem: any;


  singleBookingDetails: BookingsPage;

  booking: Booking;
  returnBookingDetails: ReturnBookingDetails;

  passenger: Passenger[];

  returnBusDetails: BusDetails;

  seatNo: number[];
  returnSeatNo: number[];
  busSeats: BusSeats[];
  returnBusSeats: BusSeats[];

  //from previous page get the booking details and store it in a variable
  //and call this onloadfetch inside ngoninit
  onLoadFetch(bookingid: number, busscid: number) {
    this.bookingDetails(bookingid);
    this.getPassenger(bookingid);
    this.getPassengerSeatNo(bookingid);
    this.getPassengerReturnSeatNo(bookingid);
    this.getBusSeatNoTable(busscid);
  }

  

  bookingDetails(bookingid: number) {
    this.bookingservice.getBooking(bookingid).subscribe(
      (data) => {
        this.booking = data as Booking;
        if(this.booking.isReturn){
          console.log('*********************')
          this.getReturnBusScId(bookingid);
        }
      }
    );
  }

  getReturnBusScId(bookingid: number) {
    this.bookingservice.getReturnBusScId(bookingid).subscribe(
      data => {
        this.returnBookingDetails = data as ReturnBookingDetails;
        console.log(this.returnBookingDetails);
        this.getReturnBusSeatNoTable(this.returnBookingDetails.busScId);
        this.getReturnBusDetails(this.returnBookingDetails.busNo);
      },
      err => {
        console.log(err);
      }
    );
  }

  getReturnBusDetails(returnBusNo: number) {
    this.bookingservice.getBusbyid(returnBusNo).subscribe(
      data => {
        this.returnBusDetails = data as BusDetails;
        console.log(this.returnBusDetails);
      }
    );
  }

  getPassenger(bookingid: number) {
    this.bookingservice.getPassenger(bookingid).subscribe(
      (data) => {
        this.passenger = data as Passenger[];
        console.log(this.passenger);
      }
    );

  }


  getPassengerSeatNo(bookingid: number) {
    this.bookingservice.getPassengerSeatNo(bookingid).subscribe(
      (data) => {
        this.seatNo = data as number[];
        console.log(this.seatNo);
      }
    );
  }

  //use isreturn check
  getPassengerReturnSeatNo(bookingid: number) {
    this.bookingservice.getPassengerReturnSeatNo(bookingid).subscribe(
      (data) => {
        this.returnSeatNo = data as number[];
        console.log(this.returnSeatNo);
      }
    );
  }

  getBusSeatNoTable(busscid: number) {
    this.bookingservice.getBusSeatNoTable(busscid).subscribe(
      (data) => {
        this.busSeats = data as BusSeats[];
        console.log(this.busSeats);
      }
    );
  }

  getReturnBusSeatNoTable(busscid: number) {
    this.bookingservice.getBusSeatNoTable(busscid).subscribe(
      (data) => {
        this.returnBusSeats = data as BusSeats[];
        console.log(this.returnBusSeats);
      }
    );
  }

  refundFare(cid: number, totalFare: number) {
    this.bookingservice.refundWalletAmount(cid, totalFare).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  addAvailableSeats(busScId:number,noOfPassengers:number){
    this.bookingservice.addAvailableSeats(busScId,noOfPassengers).subscribe(
      data=>{
        console.log(data);
        // this.reduceAvailableSeats(this.busSch.busNo,noOfPassengers);
      },
      err=>{
        console.log(err);
      }
    );
  }

  onCancel() {
    if (this.dayRem <= 2) {
      alert("Cannot cancel booking");
    }

    else {
      if (confirm("Are you sure to cancel this ticket?")) {
        if (this.booking.isReturn) {
          this.returnBusSeats.forEach(element => {
            if (this.returnSeatNo.includes(element.seatNo)) {
              element.isAvailable = true;
              this.bookingservice.putBusSeatNoTable(element).subscribe(
                data => {
                  console.log(data);
                },
                err => {
                  console.log(err);
                }
              );
            }
          }
          );
          this.busSeats.forEach(element => {
            if (this.seatNo.includes(element.seatNo)) {
              console.log(element);
              element.isAvailable = true;
              console.log(element);
              this.bookingservice.putBusSeatNoTable(element).subscribe(
                data => {
                  console.log(data);
                },
                err => {
                  console.log(err);
                }
              )
            }
          }
          );
        }

        else {
          this.busSeats.forEach(element => {
            if (this.seatNo.includes(element.seatNo)) {
              console.log(element);
              element.isAvailable = true;
              console.log(element);
              this.bookingservice.putBusSeatNoTable(element).subscribe(
                data => {
                  console.log(data);
                },
                err => {
                  console.log(err);
                }
              )
            }
          }
          );
        }

        this.addAvailableSeats(this.booking.busScId,this.booking.noOfPassengers);
        this.refundFare(this.booking.cid, this.booking.totalFare);
        this.booking.status = "Cancelled";
        this.bookingservice.putBooking(this.booking).subscribe(
          data => {
            console.log(data);
          },
          err => {
            console.log(err);
          }
        )
        alert("Booking Cancelled");
      }
    }
  }



  onBack(){
    localStorage.removeItem("bookingDetails");
    this.router.navigate(["cust-dashboard/cust-bookings"]);
  }


}
