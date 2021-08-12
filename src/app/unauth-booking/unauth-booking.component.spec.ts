import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthBookingComponent } from './unauth-booking.component';

describe('UnauthBookingComponent', () => {
  let component: UnauthBookingComponent;
  let fixture: ComponentFixture<UnauthBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
