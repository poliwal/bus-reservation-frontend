import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusComponent } from './add-bus/add-bus.component';
import { AddPassengerDetailsComponent } from './add-passenger-details/add-passenger-details.component';
import { AdminBusListComponent } from './admin-bus-list/admin-bus-list.component';
import { AdminCustomerReservationDetailsComponent } from './admin-customer-reservation-details/admin-customer-reservation-details.component';
import { AdminCustomersWithNoReservationComponent } from './admin-customers-with-no-reservation/admin-customers-with-no-reservation.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminFrequentlyTravelledRoutesComponent } from './admin-frequently-travelled-routes/admin-frequently-travelled-routes.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRecordAndProfitsComponent } from './admin-record-and-profits/admin-record-and-profits.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BusBookingDetailsComponent } from './bus-booking-details/bus-booking-details.component';
import { BusSchedulesComponent } from './bus-schedules/bus-schedules.component';
import { BusSearchListComponent } from './bus-search-list/bus-search-list.component';
import { BusSearchComponent } from './bus-search/bus-search.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { EditBusComponent } from './edit-bus/edit-bus.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ScheduleBusComponent } from './schedule-bus/schedule-bus.component';
import { SeatSelectComponent } from './seat-select/seat-select.component';
import { UnauthBookingComponent } from './unauth-booking/unauth-booking.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:'full'},
  {path:"home", component:HomeComponent},
  {path:"admin-login", component:AdminLoginComponent},
  {path:"admin-dashboard", component:AdminDashboardComponent,
    children:[
      {path:"",component:AdminBusListComponent},
      {path:"edit-bus", component:EditBusComponent},
      {path:"add-bus", component:AddBusComponent},
      {path:"schedule-bus", component:ScheduleBusComponent},
      {path:"bus-schedules", component:BusSchedulesComponent},
      {path:"record-and-profits",component:AdminRecordAndProfitsComponent},
      {path:"customers-with-no-reservation",component:AdminCustomersWithNoReservationComponent},
      {path:"customer-reservation-details",component:AdminCustomerReservationDetailsComponent},
      {path:"frequently-travelled-routes",component:AdminFrequentlyTravelledRoutesComponent}
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
    {path:"cust-wallet",component:WalletComponent},
    {path:"cust-bookings",component:BookingsComponent},
    {path:"cust-booking-info",component:CancelBookingComponent},
    //bookings and wallet component yet to be routed
   ]
  },
  {path:"cust-profile", component:CustomerProfileComponent},
  // {path:"change-pass", component:ChangePasswordComponent},
  {path:"cust-login", component:CustomerLoginComponent},
  {path:"forgot-password", component:ForgotPasswordComponent},
  {path:"reset-password", component:ResetPasswordComponent},
  {path:"cust-register", component:CustomerRegisterComponent},
  
  
  {path:"payment-form", component:PaymentFormComponent},
  
  {path:"**", component:NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
