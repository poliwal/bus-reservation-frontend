import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Passenger } from "src/app/shared/models/Passenger";

@Injectable({providedIn:"root"})
export class BusBookingService{

   
    bookedseats:number[]=[1,2,3];

    passengerlist:Passenger[];

   
    

}