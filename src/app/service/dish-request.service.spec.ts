import { TestBed } from '@angular/core/testing';

import { DishRequestService } from './dish-request.service';

describe('DishRequestService', () => {
  let service: DishRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
