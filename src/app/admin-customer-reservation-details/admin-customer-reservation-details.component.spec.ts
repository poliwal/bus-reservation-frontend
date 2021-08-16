import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomerReservationDetailsComponent } from './admin-customer-reservation-details.component';

describe('AdminCustomerReservationDetailsComponent', () => {
  let component: AdminCustomerReservationDetailsComponent;
  let fixture: ComponentFixture<AdminCustomerReservationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCustomerReservationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCustomerReservationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
