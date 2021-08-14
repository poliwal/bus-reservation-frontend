import { Component, OnInit } from '@angular/core';
import { BusSchedule } from '../shared/models/busSchedule';
import { AdminServiceService } from '../shared/services/admin-service.service';

@Component({
  selector: 'app-bus-schedules',
  templateUrl: './bus-schedules.component.html',
  styleUrls: ['./bus-schedules.component.css']
})
export class BusSchedulesComponent implements OnInit {

  busScList:BusSchedule[];

  constructor(private adminService:AdminServiceService) { }

  ngOnInit(): void {
    this.onLoading();
  }

  onLoading(){
    this.adminService.getBusSchedules().subscribe(
      data=>{
        this.busScList = data as BusSchedule[];
      },
      err=>{
        console.log(err);
      }
    );
  }
}
