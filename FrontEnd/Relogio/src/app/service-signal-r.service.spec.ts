import { TestBed, inject } from '@angular/core/testing';

import { ServiceSignalRService } from './service-signal-r.service';

describe('ServiceSignalRService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceSignalRService]
    });
  });

  it('should be created', inject([ServiceSignalRService], (service: ServiceSignalRService) => {
    expect(service).toBeTruthy();
  }));
});
