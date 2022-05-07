import { TestBed } from '@angular/core/testing';

import { LoginTokenRequestService } from './login-token-request.service';

describe('LoginTokenRequestService', () => {
  let service: LoginTokenRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginTokenRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
