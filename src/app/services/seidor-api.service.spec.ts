import { TestBed } from '@angular/core/testing';

import { SeidorApiService } from './seidor-api.service';

describe('SeidorApiService', () => {
  let service: SeidorApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeidorApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
