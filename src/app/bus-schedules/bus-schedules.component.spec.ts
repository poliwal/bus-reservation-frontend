import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusSchedulesComponent } from './bus-schedules.component';

describe('BusSchedulesComponent', () => {
  let component: BusSchedulesComponent;
  let fixture: ComponentFixture<BusSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusSchedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
