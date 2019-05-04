import { TestBed } from '@angular/core/testing';

import { PackageItemService } from './package-item.service';

describe('PackageItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PackageItemService = TestBed.get(PackageItemService);
    expect(service).toBeTruthy();
  });
});
