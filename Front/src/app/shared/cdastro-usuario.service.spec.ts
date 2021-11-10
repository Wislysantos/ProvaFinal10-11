import { TestBed } from '@angular/core/testing';

import { CdastroUsuarioService } from './cdastro-usuario.service';

describe('CdastroUsuarioService', () => {
  let service: CdastroUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdastroUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
