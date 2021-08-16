import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Booking } from '../shared/models/booking';
import { AdminServiceService } from '../shared/services/admin-service.service';

@Component({
  selector: 'app-admin-record-and-profits',
  templateUrl: './admin-record-and-profits.component.html',
  styleUrls: ['./admin-record-and-profits.component.css']
})
export class AdminRecordAndProfitsComponent implements OnInit {

  constructor(private adminService:AdminServiceService,public datepipe:DatePipe) { }

  ngOnInit(): void {

    var currdate=new Date();
    console.log(currdate);

    var dateOffset = (24*60*60*1000) * 30; //30 days
    var lastMonthDate = new Date();
    lastMonthDate.setTime(lastMonthDate.getTime() - dateOffset);

    console.log(lastMonthDate);


    //current and last month date in string format
    let currentDateString=this.datepipe.transform(currdate,'yyyy-MM-dd');
    let lastMonthDateString=this.datepipe.transform(lastMonthDate,'yyyy-MM-dd');
     
    console.log(currentDateString);
    console.log(lastMonthDateString);

    this.currentDateString=currentDateString;
    this.lastMonthDateString=lastMonthDateString;


  }

  currentDateString:any;
  lastMonthDateString:any;

  lastMonthRecord:Booking[];
  profits:number=0;

  getLastMonthDetails()
  {
    this.getLastMonthRecordAndProfits(this.lastMonthDateString,this.currentDateString);
  }


  getLastMonthRecordAndProfits(lastMonthDate:string,currentDate:string)
  {
    this.adminService.getLastMonthRecordAndProfits(lastMonthDate,currentDate).subscribe(
      (data)=>
      {
        this.lastMonthRecord=data as Booking[];
        this.calculateProfits(this.lastMonthRecord);
      },
      (err)=>
      {
        console.log(err);
      }
    );
  }

  calculateProfits(lastMonthRecord:Booking[])
  {
    lastMonthRecord.forEach(element => {
      this.profits+=element.totalFare;
    
      
    });

    console.log(this.profits);
  }

}
