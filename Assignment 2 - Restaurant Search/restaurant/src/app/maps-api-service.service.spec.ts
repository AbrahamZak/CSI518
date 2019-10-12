import { TestBed } from '@angular/core/testing';

import { MapsApiServiceService } from './maps-api-service.service';

describe('MapsApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapsApiServiceService = TestBed.get(MapsApiServiceService);
    expect(service).toBeTruthy();
  });
});
