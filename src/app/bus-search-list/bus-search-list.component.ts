import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Bus } from '../shared/models/bus';
import { BusDetails } from '../shared/models/busDetails';
import { BookingService } from '../shared/services/booking.service';


@Component({
  selector: 'app-bus-search-list',
  templateUrl: './bus-search-list.component.html',
  styleUrls: ['./bus-search-list.component.css']
})
export class BusSearchListComponent implements OnInit {

  busList:BusDetails[]=[];
  resultToGet:string;

  constructor(private bookingService:BookingService,private router:Router) { 
    this.resultToGet = this.bookingService.booking.isReturn ? 'returnBusSearchResult' : 'busSearchResult'
    this.busList=JSON.parse(localStorage.getItem(this.resultToGet)!);
  }

  bus:Bus[];

  onBook(busObj:BusDetails)
  {
    
    if(this.bookingService.booking.isReturn){
      this.bookingService.returnBusDetails = busObj
    }
    else{
      this.bookingService.busDetails=busObj;
    }
    
    this.router.navigate(["cust-dashboard/bus-booking-details"]);
  }
 
  ngOnInit(): void {
   
  }

}
