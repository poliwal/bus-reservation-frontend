import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../shared/models/admin';
import { AdminServiceService } from '../shared/services/admin-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  [x: string]: any;
  //to represent form group elements

  // loginform;
  admin:Admin;
  err:string;
  constructor(private router:Router, private adminService:AdminServiceService) {

    this.admin = new Admin();
    // this.loginform = this.fb.group({
    //   adminId: ['', [Validators.required]],
    //   adminPass: ['', [Validators.required]]
    // })


  }

  ngOnInit(): void {
    if(localStorage.getItem('admin') == 'abc'){
      this.router.navigate(["admin-dashboard"]);
    }
  }

  doLogin() {

    // this.admin = loginform.value;
    this.adminService.doLogin(this.admin.adminId, this.admin.adminPass).subscribe(
      data => {
        if(data == 'Valid'){
          this.router.navigate(['admin-dashboard']);
          localStorage.setItem('admin','abc');
        }
        
      },
      err => {
        if(err.error ==  "Invalid"){
          this.err = "Invalid username or password!!";
        }
        console.log(err.error)
      }
    );
  }
}
