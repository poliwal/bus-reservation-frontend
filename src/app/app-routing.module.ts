import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusComponent } from './add-bus/add-bus.component';
import { AddPassengerDetailsComponent } from './add-passenger-details/add-passenger-details.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BusSearchDetailsComponent } from './bus-search-details/bus-search-details.component';
import { BusSearchComponent } from './bus-search/bus-search.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { HomeComponent } from './home/home.component';
import { ScheduleBusComponent } from './schedule-bus/schedule-bus.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:'full'},
  {path:"home", component:HomeComponent},
  {path:"admin-login", component:AdminLoginComponent},
  

  {path:"cust-dashboard",component:CustomerDashboardComponent,
   children:[
    {path:"cust-profile", component:CustomerProfileComponent},
    {path:"change-pass", component:ChangePasswordComponent}
    //bookings and wallet component to be routed
   ]
},

  {path:"cust-login", component:CustomerLoginComponent},
  {path:"cust-register", component:CustomerRegisterComponent},
  {path:"bus-search", component:BusSearchComponent},
  {path:"add-bus", component:AddBusComponent},
  {path:"schedule-bus", component:ScheduleBusComponent},

  {path:"bus-search-details",component:BusSearchDetailsComponent},
  {path:"add-passenger-details",component:AddPassengerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
