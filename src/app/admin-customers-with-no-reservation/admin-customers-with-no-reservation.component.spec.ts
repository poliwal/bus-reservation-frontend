import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomersWithNoReservationComponent } from './admin-customers-with-no-reservation.component';

describe('AdminCustomersWithNoReservationComponent', () => {
  let component: AdminCustomersWithNoReservationComponent;
  let fixture: ComponentFixture<AdminCustomersWithNoReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCustomersWithNoReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCustomersWithNoReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
