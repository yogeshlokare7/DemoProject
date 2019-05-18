import { TestBed } from '@angular/core/testing';

import { SecurityuserService } from './securityuser.service';

describe('SecurityuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecurityuserService = TestBed.get(SecurityuserService);
    expect(service).toBeTruthy();
  });
});
