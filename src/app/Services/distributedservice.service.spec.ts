import { TestBed } from '@angular/core/testing';

import { DistributedserviceService } from './distributedservice.service';

describe('DistributedserviceService', () => {
  let service: DistributedserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistributedserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
