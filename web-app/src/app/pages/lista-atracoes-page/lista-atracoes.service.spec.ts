import { TestBed } from '@angular/core/testing';

import { ListaAtracoesService } from './lista-atracoes.service';

describe('ListaAtracoesService', () => {
  let service: ListaAtracoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaAtracoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
