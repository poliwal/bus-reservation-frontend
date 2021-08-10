import { Component, OnInit } from '@angular/core';
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

  constructor(private bookingService:BookingService) { 
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
    this.bookingService.getBusSeatNos(122).subscribe(
      data => {
        this.seatSelect = data as BusSeats[];
        this.starterPack()
      },
      err => {
        console.log(err)
      }
    )
  }

  starterPack(){
    this.seatSelect.forEach(element => {
      if(!element.isAvailable){
        this.notAvailableSeats.add(element.seatNo-1);
      }
    });
    // console.log(this.notAvailableSeats)
  }

  onClick(i:number){
    // console.log(this.notAvailableSeats.has(i),this.notAvailableSeats);
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

  updateBusSeats(){
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

}