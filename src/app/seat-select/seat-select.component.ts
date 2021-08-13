import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusBookingDetailsComponent } from '../bus-booking-details/bus-booking-details.component';
import { Booking } from '../shared/models/booking';
import { BusSeats } from '../shared/models/bus-seats';
import { SeatSelect } from '../shared/models/seat-select';
import { BookingService } from '../shared/services/booking.service';

@Component({
  selector: 'app-seat-select',
  templateUrl: './seat-select.component.html',
  styleUrls: ['./seat-select.component.css']
})
export class SeatSelectComponent implements OnInit {

  seatSelect:BusSeats[]=[];

  emptySeat:string;
  filledSeat:string;
  selectedSeats:number[]=[];
  notAvailableSeats:Set<number> = new Set<number>();  
  count:number;
  booking:Booking;

  constructor(private bookingService:BookingService, private router:Router) { 
    // this.seatSelect = [
    //   {seatNo:1,isAvailable:true},{seatNo:2,isAvailable:true},{seatNo:3,isAvailable:true},{seatNo:4,isAvailable:false},
    //   {seatNo:5,isAvailable:true},{seatNo:6,isAvailable:true},{seatNo:7,isAvailable:true},{seatNo:8,isAvailable:true},
    //   {seatNo:9,isAvailable:true},{seatNo:10,isAvailable:false},{seatNo:11,isAvailable:true},{seatNo:12,isAvailable:true},
    //   {seatNo:13,isAvailable:false},{seatNo:14,isAvailable:true},{seatNo:15,isAvailable:true},{seatNo:16,isAvailable:false},
    //   {seatNo:17,isAvailable:true},{seatNo:18,isAvailable:true},{seatNo:19,isAvailable:true},{seatNo:20,isAvailable:true},
    //   {seatNo:21,isAvailable:true},{seatNo:22,isAvailable:true},{seatNo:23,isAvailable:true},{seatNo:24,isAvailable:true},
    // ];

    this.emptySeat = 'far fa-bookmark fa-5x'
    this.filledSeat = 'fas fa-bookmark fa-5x'
    // console.log(this.seatSelect[0].isAvailable)
  }

  ngOnInit(): void {
    this.fillSeats();
  }

  fillSeats(){
    // console.log(this.bookingService.busDetails.busScId)
    // console.log(this.bookingService.returnBusDetails.busScId)
    if(this.bookingService.returnBusDetails.busScId){
      this.bookingService.getBusSeatNos(this.bookingService.returnBusDetails.busScId).subscribe(
        data => {
          this.seatSelect = data as BusSeats[];
          console.log(data);
          this.starterPack();
        },
        err => {
          console.log(err)
        }
      )
    }
    else{
      this.bookingService.getBusSeatNos(this.bookingService.busDetails.busScId).subscribe(
        data => {
          this.seatSelect = data as BusSeats[];
          console.log(data);
          this.starterPack();
        },
        err => {
          console.log(err)
        }
      )
    }
    // console.log(this.seatSelect);
  }

  starterPack(){
    this.count = this.bookingService.booking.noOfPassengers ? this.bookingService.booking.noOfPassengers : 0;
    this.booking = this.bookingService.booking;
    this.seatSelect.forEach(element => {
      if(!element.isAvailable){
        this.notAvailableSeats.add(element.seatNo-1);
      }
    });
    // console.log(this.notAvailableSeats)
  }

  onClick(i:number){
    // console.log(this.notAvailableSeats.has(i),this.notAvailableSeats);
    if(this.booking.noOfPassengers){
      if(this.count>0 || this.selectedSeats.includes(i)){
        if(!this.notAvailableSeats.has(i)){
          if(this.selectedSeats.includes(i)){
            this.count += 1;
            console.log("inside **********************");
          }
          else if(this.count>0){
            this.count -= 1;
          }
          
          this.seatSelect[i].isAvailable = !this.seatSelect[i].isAvailable;
          if(!this.seatSelect[i].isAvailable){
            this.selectedSeats.push(i);
          }
          else{
            this.selectedSeats = this.selectedSeats.filter(item => item !== i)
            // this.count += 1;
          }
        }
      }
    }
    else{
      if(!this.notAvailableSeats.has(i)){
        this.seatSelect[i].isAvailable = !this.seatSelect[i].isAvailable;
        if(!this.seatSelect[i].isAvailable){
          this.selectedSeats.push(i);
        }
        else{
          this.selectedSeats = this.selectedSeats.filter(item => item !== i)
        }
      }
    }

    
    
  }

  updateBusSeats(){
    localStorage.setItem("seatSelect",JSON.stringify(this.seatSelect));
    // this.seatSelect.forEach(element => {
    //   this.bookingService.updateBusSeats(element).subscribe(
    //     data=>{
    //       console.log(data);
    //     },
    //     err => {
    //       console.log(err);
    //     }
    //   )
    // });
    if(this.bookingService.returnBusDetails.busScId){
      this.navigateToBookingConfirmation();
    }
    else{
      this.navigateToAddPassengers();
    }
  }

  navigateToBookingConfirmation(){
    this.bookingService.booking.totalFare = this.bookingService.booking.totalFare * 2;
    this.selectedSeats.forEach((element,index) => {
      this.bookingService.passengerlist[index].returnSeatNo = element+1;
    });
    this.router.navigate(["cust-dashboard/booking-confirmation"]);
  }

  navigateToAddPassengers(){
    this.bookingService.booking.totalFare = this.bookingService.busDetails.fare * this.selectedSeats.length;
    this.bookingService.bookedseats = this.selectedSeats;
    this.bookingService.booking.noOfPassengers = this.selectedSeats.length;
    this.router.navigate(["cust-dashboard/add-passenger-details"]);
  }

}
