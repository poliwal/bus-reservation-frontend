import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusDetails } from '../shared/models/busDetails';
import { BookingService } from '../shared/services/booking.service';

@Component({
  selector: 'app-bus-search',
  templateUrl: './bus-search.component.html',
  styleUrls: ['./bus-search.component.css']
})
export class BusSearchComponent implements OnInit {

  bussearchform;
  // triptype:any=['one way','round trip']

  constructor(private fb:FormBuilder, private bookingService:BookingService, private router:Router) { 

    this.bussearchform = this.fb.group({
      source:['',Validators.required],
      destination:['',Validators.required],
      date:['',Validators.required],
      // toDate:[''],
    })
  }

  currdate: Date = new Date();
  addedDay:any;

  // changeTrip(e:any) {
  //   this.triptype.setValue(e.target.value, {
  //     onlySelf: true
  //   })
  // }

  ngOnInit(): void {
    localStorage.removeItem("returnBusSearchResult");
    localStorage.removeItem("busSearchResult");
  }

  busSearchResult:BusDetails[];

  onSearch(bussearchform:FormGroup){

    
    // console.log(bussearchform)
    let source = bussearchform.value.source;
    let destination = bussearchform.value.destination;
    let date = bussearchform.value.date;
    // console.log(source,destination,date)

    this.addedDay=new Date(date).setDate(new Date(date).getDate()+1);

    localStorage.setItem('addedDay',this.addedDay); 

    this.bookingService.searchBuses(source,destination,date).subscribe(
      data=>{
        console.log(data);
        this.busSearchResult = data as BusDetails[];
        this.navigateToBusSearchList(this.busSearchResult);
      },
      err=>{
        console.log(err);
      }
    );
  }

  navigateToBusSearchList(busSearchResult:BusDetails[]){
    localStorage.setItem("busSearchResult",JSON.stringify(busSearchResult));
    this.router.navigate(["cust-dashboard/bus-search-list"]);
  } 
}
