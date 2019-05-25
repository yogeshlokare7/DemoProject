import { TestBed } from '@angular/core/testing';

import { ResidentuserService } from './residentuser.service';

describe('ResidentuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResidentuserService = TestBed.get(ResidentuserService);
    expect(service).toBeTruthy();
  });
});
