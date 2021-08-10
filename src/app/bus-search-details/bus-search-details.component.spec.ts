import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusSearchDetailsComponent } from './bus-search-details.component';

describe('BusSearchDetailsComponent', () => {
  let component: BusSearchDetailsComponent;
  let fixture: ComponentFixture<BusSearchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusSearchDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusSearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
