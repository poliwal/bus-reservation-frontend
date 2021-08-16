import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecordAndProfitsComponent } from './admin-record-and-profits.component';

describe('AdminRecordAndProfitsComponent', () => {
  let component: AdminRecordAndProfitsComponent;
  let fixture: ComponentFixture<AdminRecordAndProfitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRecordAndProfitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRecordAndProfitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
