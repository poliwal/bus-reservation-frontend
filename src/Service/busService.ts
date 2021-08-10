import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn:"root"})
export class BusService{

    constructor(private http:HttpClient){

    }

    readonly uri="http://localhost:65289/api/bus";

    getBusbyid(id?:number){
        return this.http.get(this.uri+"/"+id);
    }



}