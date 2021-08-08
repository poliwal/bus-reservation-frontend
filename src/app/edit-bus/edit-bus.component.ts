import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../shared/models/bus';
import { AdminServiceService } from '../shared/services/admin-service.service';

@Component({
  selector: 'app-edit-bus',
  templateUrl: './edit-bus.component.html',
  styleUrls: ['./edit-bus.component.css']
})
export class EditBusComponent implements OnInit {

  constructor(private adminService:AdminServiceService, private router:Router) { }

  busDetails:Bus;

  ngOnInit(): void {
    this.busDetails = this.adminService.getEditBusDetails();
  }

  updateBusDetails(){
    this.adminService.updateBusDetailsService(this.busDetails).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(["admin-dashboard"]);
      },
      err=>{
        console.log(err);
      }
    )
  }

}
