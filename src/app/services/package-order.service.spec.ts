import { TestBed } from '@angular/core/testing';

import { PackageOrderService } from './package-order.service';

describe('PackageOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PackageOrderService = TestBed.get(PackageOrderService);
    expect(service).toBeTruthy();
  });
});
