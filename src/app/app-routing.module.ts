import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusComponent } from './add-bus/add-bus.component';
import { BusSearchComponent } from './bus-search/bus-search.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { ScheduleBusComponent } from './schedule-bus/schedule-bus.component';

const routes: Routes = [
  {path:"cust-profile", component:CustomerProfileComponent},
  {path:"change-pass", component:ChangePasswordComponent},
  {path:"cust-login", component:CustomerLoginComponent},
  {path:"cust-register", component:CustomerRegisterComponent},
  {path:"bus-search", component:BusSearchComponent},
  {path:"add-bus", component:AddBusComponent},
  {path:"schedule-bus", component:ScheduleBusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
