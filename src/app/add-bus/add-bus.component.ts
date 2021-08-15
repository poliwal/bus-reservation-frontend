import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, NgForm, Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Bus } from '../shared/models/bus';


import { BusSeats } from '../shared/models/bus-seats';
import { AdminServiceService } from '../shared/services/admin-service.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {

  addform:FormGroup;
  bus:Bus;
  
  constructor(private adminService:AdminServiceService, private router:Router) {

    this.addform=new FormGroup(
      {busName:new FormControl(null,Validators.required),
       source:new FormControl(null,Validators.required),
       destination:new FormControl(null,Validators.required),
       departureTime:new FormControl(null,Validators.required),
       arrivalTime:new FormControl(null,Validators.required),
      //  noOfSeats:new FormControl(null,Validators.required),
       via:new FormControl(null,Validators.required),
       fare:new FormControl(null,Validators.required),
       driverName:new FormControl(null,Validators.required),
       driverAge:new FormControl(null,Validators.required),
       driverExperience:new FormControl(null,Validators.required)

      }
    );

   }

  ngOnInit(): void {
  }

  addedBus:Bus;

  addBus(addform:FormGroup){
    this.bus = addform.value;
    this.bus.noOfSeats = 24;
    // console.log(addform.value.departureTime);
    addform.reset();
    // console.log(this.bus.departureTime);
    this.adminService.addBus(this.bus).subscribe(
      data=>{
        this.addedBus = data as Bus;
        // console.log(this.addedBus.busId);
        alert("Bus Added");
        this.router.navigate(["admin-dashboard"]);
      },
      err=>{console.log(err)}
    );
  }


}
