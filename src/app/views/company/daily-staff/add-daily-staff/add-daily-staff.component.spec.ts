import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDailyStaffComponent } from './add-daily-staff.component';

describe('AddDailyStaffComponent', () => {
  let component: AddDailyStaffComponent;
  let fixture: ComponentFixture<AddDailyStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDailyStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDailyStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
