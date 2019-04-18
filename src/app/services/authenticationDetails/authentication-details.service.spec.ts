import { TestBed } from '@angular/core/testing';

import { AuthenticationDetailsService } from './authentication-details.service';

describe('AuthenticationDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationDetailsService = TestBed.get(AuthenticationDetailsService);
    expect(service).toBeTruthy();
  });
});
