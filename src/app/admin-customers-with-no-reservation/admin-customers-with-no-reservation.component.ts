import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/models/customer';
import { AdminServiceService } from '../shared/services/admin-service.service';

@Component({
  selector: 'app-admin-customers-with-no-reservation',
  templateUrl: './admin-customers-with-no-reservation.component.html',
  styleUrls: ['./admin-customers-with-no-reservation.component.css']
})
export class AdminCustomersWithNoReservationComponent implements OnInit {

  constructor(private adminService:AdminServiceService) { }

  ngOnInit(): void {
    this.getCustomersWithNoReservation();
  }

  customersWithNoReservation:Customer[] = [];

  getCustomersWithNoReservation()
  {
    this.adminService.getCustomersWithNoReservation().subscribe(
      (data)=>
      {
        this.customersWithNoReservation=data as Customer[];
        console.log(this.customersWithNoReservation.length);
      },
      (err)=>
      {
        console.log(err);
      }
    );
  }

}
