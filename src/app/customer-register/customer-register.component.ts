import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  [x: string]: any;

  loginform;

  constructor(private fb:FormBuilder)
  {
    this.loginform=this.fb.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      mailid:['',[Validators.required,Validators.email]],
      pwd:['',[Validators.required]],
      cpwd:['',[Validators.required]],
      wallet:['',[Validators.required]],
     // contact:['',[Validators.required]]
     contact:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]  
    })


   }

  ngOnInit(): void {
  }

}
