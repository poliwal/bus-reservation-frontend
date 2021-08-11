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

  constructor(private bookingService:BookingService,private router:Router) { 

    this.busList=this.bookingService.busList;
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
    
    this.router.navigate(["bus-booking-details"]);
  }
 
  ngOnInit(): void {
   
  }

}
