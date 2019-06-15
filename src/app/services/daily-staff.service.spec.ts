import { TestBed } from '@angular/core/testing';

import { DailyStaffService } from './daily-staff.service';

describe('DailyStaffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DailyStaffService = TestBed.get(DailyStaffService);
    expect(service).toBeTruthy();
  });
});
