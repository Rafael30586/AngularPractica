import { TestBed } from '@angular/core/testing';

import { UnServicioService } from './un-servicio.service';

describe('UnServicioService', () => {
  let service: UnServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
