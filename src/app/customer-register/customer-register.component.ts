import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AbstractControl,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  [x: string]: any;
  signinform: any;

  constructor(private fb:FormBuilder) {
    this.loginform=this.fb.group({
      Fname:['',[Validators.required]],
      Lname:['',[Validators.required]],
      mailid:['',[Validators.required,Validators.email]],
      pwd:['',[Validators.required]],
      confirmpwd:['',[Validators.required]],
      Contact:['',[Validators.required]],
      Wallet:['',[Validators.required]]
      
    })
   }

  ngOnInit(): void {
  }

}
