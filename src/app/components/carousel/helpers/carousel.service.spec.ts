import { TestBed } from '@angular/core/testing';

import { CarouselService } from './carousel.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CarouselService', () => {
  let service: CarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(CarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
