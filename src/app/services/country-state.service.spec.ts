import { TestBed } from '@angular/core/testing';

import { CountryStateService } from './country-state.service';

describe('CountryStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryStateService = TestBed.get(CountryStateService);
    expect(service).toBeTruthy();
  });
});
