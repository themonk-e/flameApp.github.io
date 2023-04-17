import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from  '@angular/common/http';

import { FlameserviceService } from './flameservice.service';

describe('FlameserviceService', () => {
  let service: FlameserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlameserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
