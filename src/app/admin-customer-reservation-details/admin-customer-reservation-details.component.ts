import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Booking } from '../shared/models/booking';
import { AdminServiceService } from '../shared/services/admin-service.service';

@Component({
  selector: 'app-admin-customer-reservation-details',
  templateUrl: './admin-customer-reservation-details.component.html',
  styleUrls: ['./admin-customer-reservation-details.component.css']
})
export class AdminCustomerReservationDetailsComponent implements OnInit {

  constructor(private adminService:AdminServiceService,public datepipe:DatePipe) { }

  ngOnInit(): void {

    var currdate=new Date();
    var lastWeekDate=new Date();
    var lastMonthDate = new Date();
    var weekDateOffset = (24*60*60*1000) * 7; //1 week
    var monthDateOffset = (24*60*60*1000) * 30; //30 days
    
    lastMonthDate.setTime(lastMonthDate.getTime() - monthDateOffset);
    lastWeekDate.setTime(lastWeekDate.getTime() - weekDateOffset);

    let currentDateString=this.datepipe.transform(currdate,'yyyy-MM-dd');
    let lastWeekDateString=this.datepipe.transform(lastWeekDate,'yyyy-MM-dd');
    let lastMonthDateString=this.datepipe.transform(lastMonthDate,'yyyy-MM-dd');

    this.currentDateString = currentDateString;
    this.weekDateString = lastWeekDateString;
    this.monthDateString = lastMonthDateString;

  }

  currentDateString:any;
  weekDateString:any;
  monthDateString:any;

  customerReservationDetails:Booking[];

  getReservationOfToday()
  {
    this.getCustomerReservationDetailsOfToday(this.currentDateString);
  }

  getReservationOfWeek()
  {
    this.getCustomerReservationDetailsOfWeek(this.weekDateString,this.currentDateString);
  }

  getReservationOfMonth()
  {
    this.getCustomerReservationDetailsOfMonth(this.monthDateString,this.currentDateString);
  }

  getCustomerReservationDetailsOfToday(currDate:string)
  {
    this.adminService.getCustomerReservationDetailsOfToday(currDate).subscribe(
      (data)=>
      {
        this.customerReservationDetails=data as Booking[];
      },
      (err)=>
      {
        console.log(err);
      }
    ); 
  }

  
  getCustomerReservationDetailsOfWeek(weekDate:string,currDate:string)
  {
    this.adminService.getCustomerReservationDetailsOfWeek(weekDate,currDate).subscribe(
      (data)=>
      {
        this.customerReservationDetails=data as Booking[];
      },
      (err)=>
      {
        console.log(err);
      }
    ); 
  }

  
  getCustomerReservationDetailsOfMonth(monthDate:string,currDate:any)
  {
    this.adminService.getCustomerReservationDetailsOfMonth(monthDate,currDate).subscribe(
      (data)=>
      {
        this.customerReservationDetails=data as Booking[];
        console.log(this.customerReservationDetails);
        console.log(monthDate);
        console.log(currDate);
        console.log(data);
      },
      (err)=>
      {
        console.log(err);
      }
    ); 
  }

}
