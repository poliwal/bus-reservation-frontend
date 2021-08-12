import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../shared/services/admin-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  adminSession:string;

  ngOnInit(): void {
    this.adminSession= localStorage.getItem('admin')!
    // console.log(this.adminSession=='abc');
    if(this.adminSession!='abc'){
      this.router.navigate(["admin-login"]);
    }
  }

  logOff(){
    // this.adminService.adminSession = false;
    localStorage.removeItem('admin');
    this.router.navigate(["admin-login"]);
  }

}
