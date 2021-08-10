import { Component, OnInit, ViewChild } from '@angular/core';
import { Passenger } from '../shared/models/Passenger';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BusBookingService } from 'src/Service/busBookingService';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-passenger-details',
  templateUrl: './add-passenger-details.component.html',
  styleUrls: ['./add-passenger-details.component.css']
})
export class AddPassengerDetailsComponent implements OnInit {



  
  passenger:Passenger;
  passengerList:Passenger[]=[];
  // count:number;

  

  // form2 = new FormGroup({
  //   pName : new FormControl('',[Validators.required]),
  //   pAge : new FormControl('',[Validators.required])
  // })

  // add(objFormGroup : FormGroup){
  //   this.passenger.pName = objFormGroup.value['pName'];
  //   this.passenger.pAge = objFormGroup.value['pAge'];
  //   this.passengerList.push(this.passenger)
  //   this.passenger ={};
  //   this.count = this.count-1;
  //   this.form2.reset();
  // }


  // get f2(){
  //   return this.form2.controls;
  // }

  constructor(private busbookingservice:BusBookingService) {
     this.passenger=new Passenger();
   }

   @ViewChild('myForm', {static: false}) myForm: NgForm;

   pName:string;
   pAge:number;
   
   i=this.busbookingservice.bookedseats.length;
   fill()
   {
     
      this.passenger.pName=this.pName;
      this.passenger.pAge=this.pAge;
      
      
        this.passenger.seatNo=this.busbookingservice.bookedseats[this.i-1];
        this.i=this.i-1;
  
        
      
      
      this.passengerList.push(this.passenger);
      this.myForm.resetForm();
     
      console.log(this.passengerList);    

      
      this.passenger = {} as Passenger;
      // const user02 = <Passenger>{};
      // this.count = this.count-1;
      // this.form2.reset();
     
   }

   onFinalize()
   {
     this.busbookingservice.passengerlist=this.passengerList;
     console.log(this.busbookingservice.passengerlist);
     
   }

   

  ngOnInit(): void {
  }

}
