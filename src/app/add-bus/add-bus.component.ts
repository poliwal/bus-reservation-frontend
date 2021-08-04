import { FormatWidth } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {

  addform:FormGroup;

  constructor() {

    this.addform=new FormGroup(
      {busname:new FormControl(null,Validators.required),
       source:new FormControl(null,Validators.required),
       destination:new FormControl(null,Validators.required),
       deptime:new FormControl(null,Validators.required),
       arrtime:new FormControl(null,Validators.required),
       seatsavail:new FormControl(null,Validators.required),
       via:new FormControl(null,Validators.required),
       fare:new FormControl(null,Validators.required),
       driverid:new FormControl(null,Validators.required),
       drivername:new FormControl(null,Validators.required),
       driverage:new FormControl(null,Validators.required),
       driverexp:new FormControl(null,Validators.required)

      }
    );

   }

  

  ngOnInit(): void {
  }

}
