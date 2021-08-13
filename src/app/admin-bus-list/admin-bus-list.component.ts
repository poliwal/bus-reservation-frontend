import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../shared/models/bus';
import { AdminServiceService } from '../shared/services/admin-service.service';

@Component({
  selector: 'app-admin-bus-list',
  templateUrl: './admin-bus-list.component.html',
  styleUrls: ['./admin-bus-list.component.css']
})
export class AdminBusListComponent implements OnInit {

  busList:Bus[];
  adminSession:string;

  constructor(private adminService:AdminServiceService, private router:Router) {
    // this.busList = [
    //   {busId:101,busName:"Ez life", source:"Mumbai", destination:"Delhi", departure:"10:00", arrival:"18:00", seatsAvailable:24, 
    //     via: "Jaipur", fare:1000, driverName:"Aadi", driverAge: 49, driverExperience:20},
    //   {busId:102,busName:"life", source:"Mumbai", destination:"Pune", departure:"12:00", arrival:"14:00", seatsAvailable:24, 
    //     via: "Thane", fare:100, driverName:"Aadi2", driverAge: 39, driverExperience:23},
    //   {busId:103,busName:"This is life", source:"Banglore", destination:"Mumbai", departure:"05:00", arrival:"18:00", seatsAvailable:24, 
    //     via: "Goa", fare:1300, driverName:"Aadi3", driverAge: 59, driverExperience:40},
    // ]
   }

  ngOnInit(): void {
    this.adminSession= localStorage.getItem('admin')!
    // console.log(this.adminSession=='abc');
    if(this.adminSession!='abc'){
      this.router.navigate(["admin-login"]);
    }
    this.getBuses();
  }

  deleteBus(busId:number){
    if(confirm("Are you sure to delete this record?")){
      this.adminService.deleteBus(busId).subscribe(
        data=>{
          this.getBuses();
          console.log(data)
        },
        err=>{console.log(err)}
      );
    }
  }

  editBus(busDetails:Bus){
    this.adminService.setEditBusDetails(busDetails);
    this.router.navigate(["admin-dashboard/edit-bus"]);
  }

  getBuses(){
    this.adminService.getAllBus().subscribe(
      data=>{
        this.busList = data as Bus[];
      },
      err=>{
        console.log(err);
      }
    );
  }

}
