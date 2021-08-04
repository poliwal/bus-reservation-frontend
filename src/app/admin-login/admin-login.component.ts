import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  [x: string]: any;
  //to represent form group elements

  loginform;

  constructor(private fb:FormBuilder)
  {

    this.loginform=this.fb.group({
      mailid:['',[Validators.required,Validators.email]],
      pwd:['',[Validators.required]]
    })


   }

  ngOnInit(): void {
  }
}
