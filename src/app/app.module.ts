import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { FormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BusSearchComponent } from './bus-search/bus-search.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { ScheduleBusComponent } from './schedule-bus/schedule-bus.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminBusListComponent } from './admin-bus-list/admin-bus-list.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { EditBusComponent } from './edit-bus/edit-bus.component';
import { SeatSelectComponent } from './seat-select/seat-select.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminServiceService } from './shared/services/admin-service.service';
import { BookingService } from './shared/services/booking.service';
import { BusBookingDetailsComponent } from './bus-booking-details/bus-booking-details.component';
import { AddPassengerDetailsComponent } from './add-passenger-details/add-passenger-details.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { BusSearchListComponent } from './bus-search-list/bus-search-list.component';
import { UnauthBookingComponent } from './unauth-booking/unauth-booking.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { CustomerService } from './shared/services/customer.service';
import { WalletComponent } from './wallet/wallet.component';
import { BookingsComponent } from './bookings/bookings.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerProfileComponent,
    ChangePasswordComponent,
    CustomerLoginComponent,
    CustomerRegisterComponent,
    BusSearchComponent,
    AddBusComponent,
    ScheduleBusComponent,
    HomeComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminBusListComponent,
    CustomerDashboardComponent,
    EditBusComponent,
    SeatSelectComponent,
    BusBookingDetailsComponent,
    AddPassengerDetailsComponent,
    BookingConfirmationComponent,
    BusSearchListComponent,
    UnauthBookingComponent,
    PaymentFormComponent,
    WalletComponent,
    BookingsComponent,
    CancelBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AdminServiceService,BookingService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
