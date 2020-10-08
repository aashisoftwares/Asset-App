import { TestBed } from '@angular/core/testing';

import { EnviroinmentService } from './enviroinment.service';

describe('EnviroinmentService', () => {
  let service: EnviroinmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviroinmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
