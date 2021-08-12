import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../shared/services/booking.service';
import { Passenger } from '../shared/models/Passenger';
import { BusDetails } from '../shared/models/busDetails';
import { Bus } from '../shared/models/bus';

@Component({
  selector: 'app-add-passenger-details',
  templateUrl: './add-passenger-details.component.html',
  styleUrls: ['./add-passenger-details.component.css']
})
export class AddPassengerDetailsComponent implements OnInit {

  passenger: Passenger;
  passengerList: Passenger[] = [];
  returnBusSearchResult:BusDetails[];
  custSession:string;

  constructor(private bookingService: BookingService, private router: Router) {
    this.passenger = new Passenger();
  }

  @ViewChild('myForm', { static: false }) myForm: NgForm;

  pName: string;
  pAge: number;

  i = this.bookingService.bookedseats.length;

  fill() {

    this.passenger.pName = this.pName;
    this.passenger.pAge = this.pAge;


    this.passenger.seatNo = this.bookingService.bookedseats[this.i - 1] + 1;
    this.i = this.i - 1;




    this.passengerList.push(this.passenger);
    this.myForm.resetForm();

    console.log(this.passengerList);


    this.passenger = {} as Passenger;
    // const user02 = <Passenger>{};
    // this.count = this.count-1;
    // this.form2.reset();

  }

  onFinalize() {
    this.custSession= localStorage.getItem('cust')!;
    

    this.bookingService.passengerlist = this.passengerList;
    console.log(this.bookingService.passengerlist);

    if(this.bookingService.booking.isReturn){
      let source = this.bookingService.busDetails.destination;
      let destination = this.bookingService.busDetails.source;
      let date = this.bookingService.booking.returnDate;
      this.bookingService.searchBuses(source,destination,date).subscribe(
        data=>{
          this.returnBusSearchResult = data as BusDetails[];
          this.navigateToReturnBusSearchList(this.returnBusSearchResult);
        },
        err=>{
          console.log(err);
        }
      );
      
    }
    else{
      if(this.custSession=='zxc'){
        this.router.navigate(["cust-dashboard/booking-confirmation"]);
      }
      else{
        this.router.navigate(["cust-dashboard/unauth-booking-confirmation"])
      }
    }
    
  }

  navigateToReturnBusSearchList(returnBusSearchResult:BusDetails[]){
    localStorage.setItem("returnBusSearchResult",JSON.stringify(returnBusSearchResult));
    this.router.navigate(["cust-dashboard/bus-search-list"]);
  }

  ngOnInit(): void {
  }

}
