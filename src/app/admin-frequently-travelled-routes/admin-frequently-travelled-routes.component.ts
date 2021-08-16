import { Component, OnInit } from '@angular/core';
import { RouteFrequency } from '../shared/models/route-frequency';
import { AdminServiceService } from '../shared/services/admin-service.service';

@Component({
  selector: 'app-admin-frequently-travelled-routes',
  templateUrl: './admin-frequently-travelled-routes.component.html',
  styleUrls: ['./admin-frequently-travelled-routes.component.css']
})
export class AdminFrequentlyTravelledRoutesComponent implements OnInit {

  constructor(private adminService:AdminServiceService) { }

  ngOnInit(): void {

    this.getFrequentRoutes();
  }

  routeFrequency:RouteFrequency[];

  getFrequentRoutes()
  {
    this.adminService.getFrequentlyTravelledRoutes().subscribe(
        (data)=>
        {
          this.routeFrequency=data as RouteFrequency[];
        },
        (err)=>
        {
          console.log(err);
        }     
    );
    
  }

}
