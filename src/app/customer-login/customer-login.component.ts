import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormBuilder,FormGroup,RequiredValidator,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

 [x: string]: any;

 signupform: any;

  constructor(private fb:FormBuilder) { 
    this.loginform=this.fb.group({
      mailid:['',[Validators.required,Validators.email]],
      pwd:['',[Validators.required]]
      
    })
    
  }

  onSubmit(signupform : FormGroup){
    console.log(signupform)
  }

  ngOnInit(): void {
  }

}
