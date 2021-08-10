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
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { BusSearchDetailsComponent } from './bus-search-details/bus-search-details.component';
import { BusService } from 'src/Service/busService';
import { HttpClientModule } from '@angular/common/http';
import { AddPassengerDetailsComponent } from './add-passenger-details/add-passenger-details.component';
import { BusBookingService } from 'src/Service/busBookingService';
import { BusSearchListComponent } from './bus-search-list/bus-search-list.component';

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
    CustomerDashboardComponent,
    BusSearchDetailsComponent,
    AddPassengerDetailsComponent,
    BusSearchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BusService,BusBookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
