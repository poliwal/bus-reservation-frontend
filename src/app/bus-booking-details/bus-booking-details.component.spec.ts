import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusBookingDetailsComponent } from './bus-booking-details.component';

describe('BusBookingDetailsComponent', () => {
  let component: BusBookingDetailsComponent;
  let fixture: ComponentFixture<BusBookingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusBookingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
