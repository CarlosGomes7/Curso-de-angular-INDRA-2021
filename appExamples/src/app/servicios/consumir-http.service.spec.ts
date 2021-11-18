import { TestBed } from '@angular/core/testing';

import { ConsumirHttpService } from './consumir-http.service';

describe('ConsumirHttpService', () => {
  let service: ConsumirHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumirHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
