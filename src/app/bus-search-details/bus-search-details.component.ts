import { Component, OnInit } from '@angular/core';
import { BusService } from 'src/Service/busService';
import { Bus } from '../shared/models/Bus';
import { Booking } from '../shared/models/Booking';

@Component({
  selector: 'app-bus-search-details',
  templateUrl: './bus-search-details.component.html',
  styleUrls: ['./bus-search-details.component.css']
})
export class BusSearchDetailsComponent implements OnInit {



  constructor(private busservice:BusService) {
    // this.bus={busName:"Vector",source:"Pune",destination:"Bangalore",departure:"13:29:30",arrival:"22:40:00",seatsAvailable:15,
    //            via:"Mysore",fare:2500,driverName:"Happy",driverAge:36,driverExperience:5}

    this.booking=new Booking();
   

   }

  ngOnInit(): void {
    this.fetchBus(101);
  }

  //static - this will be implemented when user books for a bus ticket from the prev list of buses
  
  // bus1:any;
  bus:any;
  fetchBus(id?:number)
  {
    this.busservice.getBusbyid(id).subscribe((data)=>
    
    {
      console.log(data);
      this.bus=data;
      // this.bus=this.bus1;
    }
    
    );
  }

  

booking:Booking;




onWholeBusDeselect()
{
  // this.booking.noOfPassengers=null;
  this.booking.withDriver=false;
  
}




onReturnDeselect()
{
  this.booking.returnDate=null;
}

onSubmit()
{
  this.booking.busId=this.bus.busId;
  this.booking.status="Booking";

  if(this.booking.wholeBus==true)
  {
    this.booking.totalFare=(this.bus.fare*24)+3000;
    this.booking.securityDeposit=3000;
  }
  else
  {
    this.booking.totalFare= this.booking.noOfPassengers*this.bus.fare;
  }


  console.log(this.booking);
}




}
