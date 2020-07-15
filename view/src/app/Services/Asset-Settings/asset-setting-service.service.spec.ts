import { TestBed } from '@angular/core/testing';

import { AssetSettingServiceService } from './asset-setting-service.service';

describe('AssetSettingServiceService', () => {
  let service: AssetSettingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetSettingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
