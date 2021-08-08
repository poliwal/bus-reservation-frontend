import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBusListComponent } from './admin-bus-list.component';

describe('AdminBusListComponent', () => {
  let component: AdminBusListComponent;
  let fixture: ComponentFixture<AdminBusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBusListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
