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

  loginform;
  admin:Admin;
  err:string;
  constructor(private fb: FormBuilder,private router:Router, private adminService:AdminServiceService) {

    this.loginform = this.fb.group({
      adminId: ['', [Validators.required]],
      adminPass: ['', [Validators.required]]
    })


  }

  ngOnInit(): void {
  }

  doLogin(loginform:FormGroup) {
    this.admin = loginform.value;
    // console.log(this.admin)
    if (this.admin.adminId == "admin" && this.admin.adminPass == "123") {
      this.router.navigate(['admin-dashboard']);
      localStorage.setItem('admin','abc');
    }
    else {
      this.err = "Invalid username or password!!";

    }
  }
}
