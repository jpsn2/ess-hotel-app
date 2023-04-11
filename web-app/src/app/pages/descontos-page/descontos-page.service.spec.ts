import { TestBed } from '@angular/core/testing';

import { DiscountspageService } from './descontos-page.service';

describe('DescontosPageService', () => {
  let service: DiscountspageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscountspageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
