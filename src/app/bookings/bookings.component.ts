import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../shared/models/booking';
import { BookingsPage } from '../shared/models/bookings-page';
import { CustomerService } from '../shared/services/customer.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(private custService:CustomerService,private router:Router) { }
  bookings: BookingsPage[];
  cid:number;


  ngOnInit(): void {
    this.onLoading();
  }

  onLoading(){
    this.cid = Number(localStorage.getItem("cid"));
    // console.log(this.customer)
    this.custService.getBookingsForCid(this.cid).subscribe(
      data=>{
        this.bookings = data as BookingsPage[];
        this.custService.bookingsList = this.bookings;
        console.log(this.bookings)
      },
      err => {
        console.log(err);
      }
    );
    // this.customer = this.custService.customer;
    // console.log(this.customer);
  }

  viewMore(booking:BookingsPage){
    this.custService.bookingDetails=booking;
    this.router.navigate(["cust-dashboard/cust-booking-info"])
  }

}
