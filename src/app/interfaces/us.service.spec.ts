import { TestBed } from '@angular/core/testing';

import { InterfaceService } from './us.service';

describe('InterfaceService', () => {
  let service: InterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
