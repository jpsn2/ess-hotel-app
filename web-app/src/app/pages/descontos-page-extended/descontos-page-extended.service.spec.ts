import { TestBed } from '@angular/core/testing';

import { DiscountsService } from './descontos-page-extended.service';

describe('DescontosPageExtendedService', () => {
  let service: DiscountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
