import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-schedule-bus',
  templateUrl: './schedule-bus.component.html',
  styleUrls: ['./schedule-bus.component.css']
})
export class ScheduleBusComponent implements OnInit {

  scheduleform:FormGroup;

  constructor() {

    this.scheduleform=new FormGroup(
      {
        date:new FormControl(null,Validators.required),
        busid:new FormControl(null,Validators.required)
      }
    );

   }

  ngOnInit(): void {
  }

}
