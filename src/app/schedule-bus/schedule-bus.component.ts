import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Bus } from '../shared/models/bus';
import { BusSeats } from '../shared/models/bus-seats';
import { BusSchedule } from '../shared/models/busSchedule';
import { AdminServiceService } from '../shared/services/admin-service.service';

@Component({
  selector: 'app-schedule-bus',
  templateUrl: './schedule-bus.component.html',
  styleUrls: ['./schedule-bus.component.css']
})
export class ScheduleBusComponent implements OnInit {

  scheduleform:FormGroup;

  busSchedule:BusSchedule;
  addedSchedule:BusSchedule;
  busSeats:BusSeats[] = [];

  constructor(private adminService:AdminServiceService, private router:Router) {

    this.scheduleform=new FormGroup(
      {
        departureDate:new FormControl(null,Validators.required),
        busNo:new FormControl(null,Validators.required)
      }
    );

   }

  ngOnInit(): void {
  }

  addSchedule(scheduleform:FormGroup){
    this.busSchedule = scheduleform.value;
    scheduleform.reset();
    // console.log(this.busSchedule)
    this.adminService.addBusSchedule(this.busSchedule).subscribe(
      data=>{
        this.addedSchedule = data as BusSchedule;
        // console.log(this.addedSchedule);
        this.createBusSeatNo(this.addedSchedule);
        alert("Scheduled");
        this.router.navigate(["admin-dashboard"])
      }
    );
    
  }

  createBusSeatNo(addedBusSchedule:BusSchedule){
    for (let i = 0; i < 24; i++) {
      this.busSeats.push({busScId:addedBusSchedule.busScId,seatNo:i+1,isAvailable:true})
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
