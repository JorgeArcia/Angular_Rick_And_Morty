import { TestBed } from '@angular/core/testing';

import { RmapiService } from './rmapi.service';

describe('RmapiService', () => {
  let service: RmapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RmapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
