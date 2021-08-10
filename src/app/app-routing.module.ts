import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusComponent } from './add-bus/add-bus.component';
import { AdminBusListComponent } from './admin-bus-list/admin-bus-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BusBookingDetailsComponent } from './bus-booking-details/bus-booking-details.component';
import { BusSearchComponent } from './bus-search/bus-search.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { EditBusComponent } from './edit-bus/edit-bus.component';
import { HomeComponent } from './home/home.component';
import { ScheduleBusComponent } from './schedule-bus/schedule-bus.component';
import { SeatSelectComponent } from './seat-select/seat-select.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:'full'},
  {path:"home", component:HomeComponent},
  {path:"admin-login", component:AdminLoginComponent},
  {path:"admin-dashboard", component:AdminDashboardComponent,
    children:[
      {path:"",component:AdminBusListComponent},
      {path:"edit-bus", component:EditBusComponent},
    ]
  },
  {path:"cust-dashboard",component:CustomerDashboardComponent,
   children:[
    {path:"cust-profile", component:CustomerProfileComponent},
    {path:"change-pass", component:ChangePasswordComponent}
    //bookings and wallet component yet to be routed
   ]
  },
  {path:"cust-profile", component:CustomerProfileComponent},
  {path:"change-pass", component:ChangePasswordComponent},
  {path:"cust-login", component:CustomerLoginComponent},
  {path:"cust-register", component:CustomerRegisterComponent},
  {path:"bus-search", component:BusSearchComponent},
  {path:"bus-booking-details", component:BusBookingDetailsComponent},
  {path:"add-bus", component:AddBusComponent},
  // {path:"edit-bus", component:EditBusComponent},
  {path:"schedule-bus", component:ScheduleBusComponent},
  {path:"seat-select", component:SeatSelectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
