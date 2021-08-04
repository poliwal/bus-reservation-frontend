import { Component, OnInit } from '@angular/core';
import { ChangePassword } from '../shared/models/change-pass';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePass:ChangePassword = new ChangePassword();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.changePass)
  }

}
