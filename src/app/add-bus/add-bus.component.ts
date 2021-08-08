import { FormatWidth } from '@angular/common';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, NgForm, Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Bus } from '../shared/models/bus';
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

  addBus(addform:FormGroup){
    this.bus = addform.value;
    // console.log(addform.value.departure);
    addform.reset();
    // console.log(this.bus.departure);
    this.adminService.addBus(this.bus).subscribe(
      data=>{
        console.log(data);
        alert("Bus Added");
        this.router.navigate(["admin-dashboard"]);
      },
      err=>{console.log(err)}
    );
  }

}
