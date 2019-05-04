import { TestBed } from '@angular/core/testing';

import { RawMaterialService } from './raw-material.service';

describe('RawMaterialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RawMaterialService = TestBed.get(RawMaterialService);
    expect(service).toBeTruthy();
  });
});
