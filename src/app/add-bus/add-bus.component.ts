import { FormatWidth } from '@angular/common';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
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
  busSeats:BusSeats[] = [];
  constructor(private adminService:AdminServiceService, private router:Router) {

    this.addform=new FormGroup(
      {busName:new FormControl(null,Validators.required),
       source:new FormControl(null,Validators.required),
       destination:new FormControl(null,Validators.required),
       departure:new FormControl(null,Validators.required),
       arrival:new FormControl(null,Validators.required),
       seatsAvailable:new FormControl(null,Validators.required),
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
    // console.log(addform.value.departure);
    addform.reset();
    // console.log(this.bus.departure);
    this.adminService.addBus(this.bus).subscribe(
      data=>{
        this.addedBus = data as Bus;
        // console.log(this.addedBus.busId);
        this.createBusSeatNo(this.addedBus)
        alert("Bus Added");
        this.router.navigate(["admin-dashboard"]);
      },
      err=>{console.log(err)}
    );
  }

  createBusSeatNo(addedBus:Bus){
    for (let i = 0; i < addedBus.seatsAvailable; i++) {
      this.busSeats.push({busId:addedBus.busId,seatNo:i+1,isAvailable:true})
      
    }
    console.log(this.busSeats);
    this.adminService.addBusSeatNos(this.busSeats).subscribe(
        data=>{
          console.log(data);
        },
        err=>{
          console.log(err);
        }
      );
  }

}
