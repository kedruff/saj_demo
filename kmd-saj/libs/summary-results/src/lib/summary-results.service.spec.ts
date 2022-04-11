import { TestBed } from '@angular/core/testing';

import { SummaryResultsService } from './summary-results.service';

describe('SummaryResultsService', () => {
  let service: SummaryResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SummaryResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
