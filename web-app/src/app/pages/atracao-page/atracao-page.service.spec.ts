import { TestBed } from '@angular/core/testing';

import { AtracaoPageService } from './atracao-page.service';

describe('AtracaoPageService', () => {
  let service: AtracaoPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtracaoPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
