import { TestBed } from '@angular/core/testing';

import { ServiciofireService } from './serviciofire.service';

describe('ServiciofireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciofireService = TestBed.get(ServiciofireService);
    expect(service).toBeTruthy();
  });
});
