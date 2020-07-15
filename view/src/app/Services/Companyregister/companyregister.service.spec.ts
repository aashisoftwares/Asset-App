import { TestBed } from '@angular/core/testing';

import { CompanyregisterService } from './companyregister.service';

describe('CompanyregisterService', () => {
  let service: CompanyregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
