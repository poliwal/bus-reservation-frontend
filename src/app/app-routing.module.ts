import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusComponent } from './add-bus/add-bus.component';
import { AddPassengerDetailsComponent } from './add-passenger-details/add-passenger-details.component';
import { AdminBusListComponent } from './admin-bus-list/admin-bus-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { BusBookingDetailsComponent } from './bus-booking-details/bus-booking-details.component';
import { BusSearchListComponent } from './bus-search-list/bus-search-list.component';
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
import { UnauthBookingComponent } from './unauth-booking/unauth-booking.component';

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
    {path:"", component:BusSearchComponent},
    {path:"cust-profile", component:CustomerProfileComponent},
    {path:"change-pass", component:ChangePasswordComponent},
    {path:"bus-search-list",component:BusSearchListComponent},
    {path:"bus-booking-details", component:BusBookingDetailsComponent},
    {path:"seat-select", component:SeatSelectComponent},
    {path:"add-passenger-details",component:AddPassengerDetailsComponent},
    {path:"booking-confirmation",component:BookingConfirmationComponent},
    {path:"unauth-booking-confirmation",component:UnauthBookingComponent},
    //bookings and wallet component yet to be routed
   ]
  },
  {path:"cust-profile", component:CustomerProfileComponent},
  // {path:"change-pass", component:ChangePasswordComponent},
  {path:"cust-login", component:CustomerLoginComponent},
  {path:"cust-register", component:CustomerRegisterComponent},
  
  
  {path:"add-bus", component:AddBusComponent},
  // {path:"edit-bus", component:EditBusComponent},
  {path:"schedule-bus", component:ScheduleBusComponent},
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
