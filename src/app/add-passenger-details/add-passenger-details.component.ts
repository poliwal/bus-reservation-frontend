import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../shared/services/booking.service';
import { Passenger } from '../shared/models/Passenger';

@Component({
  selector: 'app-add-passenger-details',
  templateUrl: './add-passenger-details.component.html',
  styleUrls: ['./add-passenger-details.component.css']
})
export class AddPassengerDetailsComponent implements OnInit {




  passenger: Passenger;
  passengerList: Passenger[] = [];


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
    this.bookingService.passengerlist = this.passengerList;
    console.log(this.bookingService.passengerlist);

    if(this.bookingService.booking.isReturn){
      this.router.navigate(["bus-search-list"])
    }
    else{
      this.router.navigate(["booking-confirmation"]);
    }
    
  }



  ngOnInit(): void {
  }

}
