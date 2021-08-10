import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusSearchListComponent } from './bus-search-list.component';

describe('BusSearchListComponent', () => {
  let component: BusSearchListComponent;
  let fixture: ComponentFixture<BusSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusSearchListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
