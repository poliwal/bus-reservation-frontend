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
import { BusSearchDetailsComponent } from './bus-search-details/bus-search-details.component';
import { SeatSelectComponent } from './seat-select/seat-select.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminServiceService } from './shared/services/admin-service.service';

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
    BusSearchDetailsComponent,
    SeatSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AdminServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
