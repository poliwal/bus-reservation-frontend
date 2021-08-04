import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bus-search',
  templateUrl: './bus-search.component.html',
  styleUrls: ['./bus-search.component.css']
})
export class BusSearchComponent implements OnInit {

  bussearchform;
  triptype:any=['one way','round trip']

  constructor(private fb:FormBuilder) { 

    this.bussearchform = this.fb.group({
      trip:[''],
      from:['',Validators.required],
      to:['',Validators.required],
      departure:['',Validators.required],
      returndate:[''],
      passengers:['']
    })
  }

  changeTrip(e:any) {
    this.triptype.setValue(e.target.value, {
      onlySelf: true
    })
  }

  ngOnInit(): void {
  }
}
