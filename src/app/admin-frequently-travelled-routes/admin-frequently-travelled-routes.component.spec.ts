import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFrequentlyTravelledRoutesComponent } from './admin-frequently-travelled-routes.component';

describe('AdminFrequentlyTravelledRoutesComponent', () => {
  let component: AdminFrequentlyTravelledRoutesComponent;
  let fixture: ComponentFixture<AdminFrequentlyTravelledRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFrequentlyTravelledRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFrequentlyTravelledRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
