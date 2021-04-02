import { TestBed } from '@angular/core/testing';

import { AgendaLineService } from './agenda-line.service';

describe('AgendaLineService', () => {
  let service: AgendaLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendaLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
