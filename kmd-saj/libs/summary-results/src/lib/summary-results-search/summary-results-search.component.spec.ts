import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryResultsSearchComponent } from './summary-results-search.component';

describe('SummaryResultsSearchComponent', () => {
  let component: SummaryResultsSearchComponent;
  let fixture: ComponentFixture<SummaryResultsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryResultsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryResultsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
